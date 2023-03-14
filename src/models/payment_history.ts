import { BelongsTo, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { uuid } from 'uuidv4';
import { User } from './user';
import { Subscription } from './subscription';

@Table({
    tableName: 'payment_history',
    paranoid: true,
    createdAt: true,
    updatedAt: true
})

export class PaymentHistory extends Model<PaymentHistory> {
    @PrimaryKey
    @Column
    id?: string = uuid();

    @Column(DataType.FLOAT(10, 2))
    amount?: number;

    @Column
    date?: Date;

    @Default("CB")
    @Column(DataType.ENUM("CB", "Virement"))
    payment_method?: "CB" | "Virement";

    @ForeignKey(() => User)
    @Column
    user_id?: string;

    @ForeignKey(() => Subscription)
    @Column
    subscription_id?: string;

    @BelongsTo(() => User)
    user?: User;

    @BelongsTo(() => Subscription)
    subscription?: Subscription;
}