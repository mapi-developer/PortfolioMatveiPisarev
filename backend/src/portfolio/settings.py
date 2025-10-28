from typing import Optional

from pydantic import Field
from pydantic_settings import BaseSettings


class AppSettings(BaseSettings):
    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"
        env_prefix = "app_"

    MONGO_DB_URL: Optional[str] = Field(default=None)
    MONGO_DB_DB: Optional[str] = Field(default=None)


settings = AppSettings()
