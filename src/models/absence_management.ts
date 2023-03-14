import { BelongsTo, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { uuid } from 'uuidv4';
import { User } from './user';

@Table({
    tableName: 'absence_management',
    paranoid: true,
    createdAt: true,
    updatedAt: true
})
export class AbsenceManagement extends Model<AbsenceManagement> {
    @PrimaryKey
    @Column
    id?: string = uuid();

    @Column
    date?: Date;
    
    @Default("absence")
    @Column(DataType.ENUM("absence", "visiteur"))
    absence_type?: "absence" | "visiteur";

    @Column
    reason?: string;

    @ForeignKey(() => User)
    @Column
    user_id?: string;

    @BelongsTo(() => User)
    user?: User;
}