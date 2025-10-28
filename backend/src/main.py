from contextlib import asynccontextmanager

from fastapi import FastAPI
from motor.motor_asyncio import AsyncIOMotorDatabase

from .api.views import router as api_router
from .db.utils import get_mongodb


class AppWithMongo(FastAPI):
    mongodb: AsyncIOMotorDatabase


@asynccontextmanager
async def lifespan(app: AppWithMongo):
    mongodb = get_mongodb()
    app.mongodb = mongodb
    yield
    app.mongodb.close()


app = AppWithMongo(lifespan=lifespan)
app.include_router(api_router)


@app.get("/")
async def read_root() -> dict:
    return {"message": "Welcome to the FastAPI application!"}
