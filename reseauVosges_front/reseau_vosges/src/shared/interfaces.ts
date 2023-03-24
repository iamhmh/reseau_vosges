export interface IUser {
    id?: string;
    email: string;
    name: string;
    password?: string;
    firstname: string;
    role: "super_admin" | "bureau_admin" | "membre" | "user";
}

export interface IHttpException {
    message: string;
    status: number;
    data: any;
}
  