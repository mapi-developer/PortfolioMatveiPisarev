from typing import Optional

from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase

from ..portfolio.settings import settings

client: Optional[AsyncIOMotorClient] = None


def get_mongodb() -> AsyncIOMotorDatabase:
    global client
    if client is None:
        # lazy create the motor client (ensure settings.MONGO_DB_URL exists at runtime)
        client = AsyncIOMotorClient(settings.MONGO_DB_URL)  # type: ignore[name-defined]
    return client.get_database(settings.MONGO_DB_DB)  # type: ignore[name-defined]
