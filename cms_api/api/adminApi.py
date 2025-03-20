# -*- coding:utf-8 -*-
# Author: Zachary

from api import app
from common.result import Result


@app.get("/")
async def hello():
    return Result.success()