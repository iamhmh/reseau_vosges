export interface IUser {
    id: string;
    role: "super_admin" | "bureau_admin" | "membre" | "user";
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
    phone_number: string;
    address: string;
    city: string;
    zip_code: number;
    compagny_name: string;
    compagny_domain: string;
    website_url: string;
    business_description: string;
    business_activity: string;
    avatar: string;
    compagny_logo: string;
}