import {Injectable} from '@nestjs/common';
import {CreateDatabaseModuleDto} from './dto/create-database-module.dto';
import {UpdateDatabaseModuleDto} from './dto/update-database-module.dto';
import {Users} from "./entities/database-module.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {CustomMsg} from "../common/decorators";


interface Repost {
    data: any;
    msg: string;
}

@Injectable()
export class DatabaseModuleService {
    constructor(@InjectRepository(Users) private readonly userRepository: Repository<Users>) {
    }

    async create(user: Users) {
        /**
         *  新增之前 要选查询  用户是否存在 不再在注册新增
         *  现有查询方法  然后服用查询 方法
         *  所以我们 先将 查询 再将 新增
         */
        const res: Users[] = await this.findOne(user.username)
        if (res.length > 0) {
            return {data: 0, msg: '已存在'}
        } else {
            await this.userRepository.save(user);
            return {data: 1, msg: '新增成功'}
        }

    }

    /**
     * 根据用户名查询
     * @param username
     */
    findOne(username: string): Promise<Users[]> {
        return this.userRepository.createQueryBuilder('users')
            .where('users.username = :username', {username})
            .getMany();
    }

    findAll() {
        return this.userRepository.createQueryBuilder('users').getMany();
    }

    updata(parmas: { username: string; data: Users }) {

        this.userRepository.update({username: parmas.username}, {...parmas.data});

    }


    async remove(username: string) {
        await this.userRepository.delete({username});
    }

    async deleteWithMultipleConditions(conditions: {username:string;password:string}): Promise<void> {
        const queryBuilder = this.userRepository.createQueryBuilder('users');

        /**
         * 条件
         * andWhere 与 where 的区别
         * andWhere 会在原有的条件上进行添加
         * where 会将原有的条件覆盖
         */

        queryBuilder.andWhere('users.username = :username', {username: conditions.username})
        queryBuilder.andWhere('users.password = :password', {password: conditions.password})

        await queryBuilder.delete().execute();
    }

    async updataWithMultipleConditions(conditions: Record<string, any>, newData: unknown): Promise<void> {
        const queryBuilder = this.userRepository.createQueryBuilder('users');
        console.log("conditions",conditions)
        queryBuilder.andWhere('users.score = :score', {score:conditions.score})
        queryBuilder.andWhere('users.nativePlace = :nativePlace', {nativePlace:conditions.nativePlace})

        await queryBuilder.update().set(newData).execute();
    }
}
