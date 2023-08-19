import {Injectable} from '@nestjs/common';
import {CreateWeekendDto} from './dto/create-weekend.dto';
import {UpdateWeekendDto} from './dto/update-weekend.dto';

@Injectable()
export class WeekendService {
    create() {
        return '两年半前端 ayong 上传图片成功';
    }

    findAll() {
        return `This action returns all weekend`;
    }


    findOne(id: number) {
        return `This action returns a #${id} weekend`;
    }

    update(id: number, updateWeekendDto: UpdateWeekendDto) {
        return `This action updates a #${id} weekend`;
    }

    remove(id: number) {
        return `This action removes a #${id} weekend`;
    }
}
