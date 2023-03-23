export interface PaginateData {
    items: any[];
    totalItems: number;
    currentPage: number;
    totalPages: number;
}

export interface FindOptionsRequest {
    page: number;
    size: number;
    where: any;
    body: any;
    order: any;
    attributes: string[];
    search: string;
}

export interface FindOptions {
    limit: number;
    offset: number;
    page: number;
    order: any;
    body: any;
    attributes: string[];
    where: any;
}
