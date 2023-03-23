import { DataType, BelongsTo, Column, Default, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { uuid } from 'uuidv4';
import { User } from './user';

@Table({
    tableName: 'mpb',
    paranoid: true,
    createdAt: true,
    updatedAt: true
})

export class Mpb extends Model<Mpb> {
    @PrimaryKey
    @Column
    id?: string = uuid();

    @Column(DataType.FLOAT(10, 2))
    amount?: number;

    @Default("Nouveau")
    @Column(DataType.ENUM("Nouveau", "Récurrent"))
    business_type?: "Nouveau" | "Récurrent";

    @Default("Interne")
    @Column(DataType.ENUM("Interne", "Externe", "Essaimage"))
    recommendation_type?: "Interne" | "Externe" | "Essaimage";

    @Column
    commentary?: string;

    @ForeignKey(() => User)
    @Column
    user_id?: string;

    @BelongsTo(() => User)
    user?: User;
}