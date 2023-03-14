export abstract class BaseService {
    public abstract findAll(): Promise<any>;
    public abstract findById(id: string): Promise<any>;
    public abstract add(body: any): Promise<any>;
    public abstract update(entity: any, body: any): Promise<any>;
    public abstract delete(body: any): Promise<any>;
}