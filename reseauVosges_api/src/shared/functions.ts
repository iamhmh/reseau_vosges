import { FindOptions, FindOptionsRequest } from "../utils/interfaces";

export function getPagination(options: FindOptionsRequest) {
  let { size = 1, page = 12, order = [["createdAt", "DESC"]], attributes = null } = options;
  const limit = size ? +size : 12;
  page -= 1;
  const offset = page ? page * limit : 0;
  return { limit, offset, order, attributes, page, body: options } as FindOptions;
}

export function getPagingData(data: any, page: number, limit: number) {
  const { count: totalItems, rows: items } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);
  return { totalItems, items, totalPages, currentPage };
}

export function slugify(...args: (string | number)[]) {
  const value = args.join(" ");
  return value
    .normalize("NFD") 
    .replace(/[\u0300-\u036f]/g, "") 
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, "") 
    .replace(/\s+/g, "-"); 
}

export function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
