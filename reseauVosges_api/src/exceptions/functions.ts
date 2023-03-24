import { NotFoundException } from "./exceptions";

export const isNotFound = (x: any, entity: string) => {
  if (x === null || x === undefined) {
    throw new NotFoundException(entity);
  }
};