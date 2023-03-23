import { Sequelize } from 'sequelize-typescript';
import * as dotenv from 'dotenv';
import { User } from './models/user';
import { Visitor } from './models/visitor';
import { Conference } from './models/conference';
import { Group } from './models/group';
import { AbsenceManagement } from './models/absence_management';
import { Recommendations } from './models/recommendations';
import { Mpb } from './models/mpb';
import { PrivateTalk } from './models/private_talk';
import { Subscription } from './models/subscription';
import { PaymentHistory } from './models/payment_history';

dotenv.config({ path: __dirname + '.env' });

export const sequelize = new Sequelize({
    dialect: "mysql",
    database: "bni_db",
    username: "root",
    password: "",
    host: "localhost",
});

sequelize.addModels([
    User,
    Visitor,
    AbsenceManagement,
    Recommendations,
    Conference,
    Group,
    Mpb,
    PaymentHistory,
    PrivateTalk,
    Subscription,
]);

export default sequelize;