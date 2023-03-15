import { BelongsTo, HasMany, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { uuid } from 'uuidv4';
import { User } from './user';

@Table({
    tableName: 'group',
    paranoid: true,
    createdAt: true,
    updatedAt: true
})

export class Group extends Model<Group> {
    @PrimaryKey
    @Column
    id?: string = uuid();

    @Column
    name?: string;

    @Column
    address?: string;

    @Column
    city?: string;

    @Column(DataType.INTEGER)
    zip_code?: number;

    @ForeignKey(() => User)
    @Column
    user_id?: string;

    @BelongsTo(() => User)
    group_creator?: User;

    @HasMany(() => User)
    users?: User[];
}