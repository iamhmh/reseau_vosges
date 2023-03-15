import { BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { uuid } from 'uuidv4';
import { User } from './user';

@Table({
    tableName: 'private_talk',
    paranoid: true,
    createdAt: true,
    updatedAt: true
})

export class PrivateTalk extends Model<PrivateTalk> {
    @PrimaryKey
    @Column
    id?: string = uuid();

    @Column
    meeting_place?: string;

    @Column
    date?: Date;

    @Column
    conversation_subject?: string;

    @ForeignKey(() => User)
    @Column
    user_id?: string;

    @BelongsTo(() => User)
    user?: User;

    @ForeignKey(() => User)
    @Column
    initiated_by_user_id?: string;

    @BelongsTo(() => User)
    initiated_by_user?: User;
}