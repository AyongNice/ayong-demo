import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import {DatabaseModuleService} from './database-module.service';
import {CreateDatabaseModuleDto} from './dto/create-database-module.dto';
import {UpdateDatabaseModuleDto} from './dto/update-database-module.dto';

import {Users} from "./entities/database-module.entity";

interface Repost {
    data: any;
    msg: string;
}

/**
 * 增删改差
 * 1: 执行 sql 语句进行数据库操作 增删改查
 * 2: 执行 typeorm 封装的方法进行数据库操作 增删改查
 */
@Controller('database-module')
export class DatabaseModuleController {
    constructor(private readonly databaseModuleService: DatabaseModuleService) {
    }

    @Post('add')
    create(@Body() user: Users) {
        return this.databaseModuleService.create(user);

    }

    @Post('findAll')
    async findAll() {
        return this.databaseModuleService.findAll();

    }

    @Post('find')
    findOne(@Body() user: Users) {
        return this.databaseModuleService.findOne(user.username);

    }

    @Post('updataWithMultipleConditions')
    updataWithMultipleConditions(@Body() user: any) {
        this.databaseModuleService.updataWithMultipleConditions(user.conditions, user.newData);

    }


    @Post('pnupdate')
    updata(@Body() parmas: { username: string, data: Users }) {
        return this.databaseModuleService.updata(parmas);

    }

    @Post('remove')
    remove(@Body() parmas: { username: string, data: Users }) {
        return this.databaseModuleService.remove(parmas.username);

    }

    @Post('deleteWithMultipleConditions')
    deleteWithMultipleConditions(@Body() parmas: { conditions: { username: string; password: string } }) {
        return this.databaseModuleService.deleteWithMultipleConditions(parmas.conditions);

    }

}
