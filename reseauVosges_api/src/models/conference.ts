import { BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { uuid } from 'uuidv4';
import { User } from './user';

@Table({
    tableName: 'conference',
    paranoid: true,
    createdAt: true,
    updatedAt: true
})

export class Conference extends Model<Conference> {
    @PrimaryKey
    @Column
    id?: string = uuid();

    @Column
    date?: Date;

    @Column
    theme?: string;

    @ForeignKey(() => User)
    @Column
    user_id?: string;

    @BelongsTo(() => User)
    user?: User;
}