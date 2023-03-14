import { BelongsTo, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { uuid } from 'uuidv4';
import { User } from './user';

@Table({
    tableName: 'subscription',
    paranoid: true,
    createdAt: true,
    updatedAt: true
})

export class Subscription extends Model<Subscription> {
    @PrimaryKey
    @Column
    id?: string = uuid();

    @Default("Annuel")
    @Column(DataType.ENUM("Annuel", "Mensuel"))
    subscription_type?: "Annuel" | "Mensuel";

    @Column
    subscription_start_date?: Date;

    @Column
    subscription_end_date?: Date;

    @ForeignKey(() => User)
    @Column
    user_id?: string;

    @BelongsTo(() => User)
    user?: User;
}