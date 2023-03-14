import { BelongsTo, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { uuid } from 'uuidv4';
import { User } from './user';

@Table({
    tableName: 'recommendations',
    paranoid: true,
    createdAt: true,
    updatedAt: true
})

export class Recommendations extends Model<Recommendations> {
    @PrimaryKey
    @Column
    id?: string = uuid();

    @Default("Externe")
    @Column(DataType.ENUM("Interne", "Externe"))
    recommendation_type?: "Interne" | "Externe";

    @Default(false)
    @Column
    status?: boolean

    @Column
    recommendation?: string;

    @Column(DataType.INTEGER)
    phone_number?:  number;

    @Column
    email?: string;

    @Column
    address?: string;

    @Column
    commentary?: string;

    @Column(DataType.ENUM("1", "2", "3", "4", "5"))
    rating?: "1" | "2" | "3" | "4" | "5";

    @ForeignKey(() => User)
    @Column
    user_id?: string;

    @BelongsTo(() => User)
    user?: User;
}