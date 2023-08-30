import {BaseEntity, Column, Entity, Index, PrimaryGeneratedColumn} from "typeorm";

/**
 * 模块实体文件 用来创建数据表
 *
 * Member 关联  Users 主表
 */

//主表
@Entity()
export class Users extends BaseEntity {

    /**
     * ID 自增
     */
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * 添加索引 用于快速查询
     */
    @Column()
    @Index('idx_username')
    username: string;
    /**
     * 防止手机号重复
     */
    @Column()
    @Index('idx_phone')
    phone: string;

    @Column()
    password: string;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    startTime: Date;
    /**
     * 主表关联 会员表信息字段 分表查询
     * nullable 值可以为 空
     */
    @Column({ nullable: true })
    identification: number;

    //成绩
    @Column({ nullable: true })
    score: number;

    //年龄
    @Column({ nullable: true })
    age: number;

    //籍贯
    @Column({ nullable: true })
    nativePlace: string;


}


//副表
@Entity()
export class Member extends BaseEntity {
    /**
     * ID 自增
     */
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * 关联 主表
     */
    @Column()
    @Index('idx_identification')
    identification: number
    /**
     * decimal 字段 精度为 10  小位数 为2
     */
    @Column({type: 'decimal', precision: 10, scale: 2, default: 0.0})
    amount: number;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    startTime: Date;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    endTime: Date;

}