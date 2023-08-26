import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import {DatabaseModuleService} from './database-module.service';
import {CreateDatabaseModuleDto} from './dto/create-database-module.dto';
import {UpdateDatabaseModuleDto} from './dto/update-database-module.dto';

import {Users} from "./entities/database-module.entity";

@Controller('database-module')
export class DatabaseModuleController {
    constructor(private readonly databaseModuleService: DatabaseModuleService) {
    }

    @Post('add')
    create(@Body() user: Users): string {
        console.log(user)
        return this.databaseModuleService.create(user);

    }

    @Get()
    findAll() {
        return this.databaseModuleService.findAll();
    }

    @Get('test/:id')
    findOne(@Param('id') id: string) {
        return this.databaseModuleService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateDatabaseModuleDto: UpdateDatabaseModuleDto) {
        return this.databaseModuleService.update(+id, updateDatabaseModuleDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.databaseModuleService.remove(+id);
    }
}
