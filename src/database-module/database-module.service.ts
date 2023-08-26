import {Injectable} from '@nestjs/common';
import {CreateDatabaseModuleDto} from './dto/create-database-module.dto';
import {UpdateDatabaseModuleDto} from './dto/update-database-module.dto';
import {Users} from "./entities/database-module.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {CustomMsg} from "../common/decorators";

@Injectable()
export class DatabaseModuleService {
    constructor(@InjectRepository(Users) private readonly userRepository: Repository<Users>) {
    }

    create(user: Users, ): string {
        this.userRepository.save(user);
        return 'msg'
    }

    findAll() {
        return `This action returns all databaseModule`;
    }

    findOne(id: number) {
        return `This action returns a #${id} databaseModule`;
    }

    update(id: number, updateDatabaseModuleDto: UpdateDatabaseModuleDto) {
        return `This action updates a #${id} databaseModule`;
    }

    remove(id: number) {
        return `This action removes a #${id} databaseModule`;
    }
}
