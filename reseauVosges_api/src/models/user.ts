import { HasMany, Column, DataType, Default, Model, PrimaryKey, Table, HasOne, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { uuid } from 'uuidv4';
import { AbsenceManagement } from './absence_management';
import { Conference } from './conference';
import { Group } from './group';
import { Mpb } from './mpb';
import { Subscription } from './subscription';
import { PaymentHistory } from './payment_history';
import { PrivateTalk } from './private_talk';
import { Recommendations } from './recommendations';

@Table({
    tableName: 'users',
    paranoid: true,
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
})
export class User extends Model<User> {
    @PrimaryKey
    @Column
    id?: string = uuid();

    @Default('user')
    @Column(DataType.ENUM("super_admin", "bureau_admin", "membre", "user"))
    role?: "super_admin" | "bureau_admin" | "membre" | "user";

    @Column
    firstname?: string;

    @Column
    lastname?: string;

    @Column
    username?: string;

    @Column
    email?: string;

    @Column
    password?: string;

    @Column
    phone_number?:  string;

    @Column
    address?: string;

    @Column
    city?: string;

    @Column(DataType.INTEGER)
    zip_code?: number;

    @Column
    compagny_name?: string;

    @Column
    compagny_domain?: string;

    @Column
    website_url?: string;

    @Column
    business_description?: string;

    @Column
    business_activity?: string;

    @Column
    avatar?: string;

    @Column
    compagny_logo?: string;

    @HasMany(() => AbsenceManagement)
    absence_managements?: AbsenceManagement[];

    @HasMany(() => Conference)
    conference?: Conference[];

    @HasOne(() => Group)
    group?: Group;

    @BelongsTo(() => Group)
    group_id?: string;

    @HasMany(() => Mpb)
    mpb?: Mpb[];

    @HasMany(() => Subscription)
    subscription?: Subscription[];

    @HasMany(() => PaymentHistory)
    payment_history?: PaymentHistory[];

    @HasMany(() => PrivateTalk)
    private_talk?: PrivateTalk[];

    @HasMany(() => Recommendations)
    recommendations?: Recommendations[];

    @ForeignKey(() => Group)
    @Column
    groupid?: string;
}