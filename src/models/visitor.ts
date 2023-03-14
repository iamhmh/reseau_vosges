import { Column, DataType, Default, Model, PrimaryKey, Table, HasOne, IsNull } from 'sequelize-typescript';
import { uuid } from 'uuidv4';

@Table({
    tableName: 'visitor',
    paranoid: true,
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
})

export class Visitor extends Model<Visitor> {
    @PrimaryKey
    @Column
    id?: string = uuid();

    @Default(IsNull)
    @Column(DataType.ENUM("Mlle", "Mme", "M.", "Prof", "Dr"))
    civility?: "Mlle" | "Mme" | "M." | "Prof" | "Dr";

    @Column
    firstname?: string;

    @Column
    lastname?: string;

    @Column
    email?: string;

    @Column(DataType.INTEGER)
    phone_number?:  number;

    @Column
    address_1?: string;

    @Column
    address_2?: string;

    @Column
    city?: string;

    @Column(DataType.INTEGER)
    zip_code?: number;

    @Column
    compagny_name?: string;

    @Column
    date_of_visit?: Date;

    @Column
    profession?: string;

    @Column(DataType.ENUM("Visiteur", "Directeur", "Suppléant"))
    visitor_type?: "Visiteur" | "Directeur" | "Suppléant";

    @Column
    reunion_date?: Date;
}