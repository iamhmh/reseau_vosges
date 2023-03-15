import { FORBIDDEN, NOT_FOUND, UNPROCESSABLE_ENTITY } from "http-status";

export class Http {
  status: number;
  message: string;
  data: any;

  constructor(status: number, message: string, data: any = {}) {
    this.status = status;
    this.message = message;
    this.data = data;
  }
}

export class NotFoundException extends Http {
  constructor(entity: string) {
    super(NOT_FOUND, `${entity} introuvable`);
  }
}

export class AlreadyExistException extends Http {
  constructor(entity: string) {
    super(UNPROCESSABLE_ENTITY, `${entity} existe déjà`);
  }
}

export class InvalidParams extends Http {
  constructor(params: string[]) 
  {
    super(UNPROCESSABLE_ENTITY, `${params.join(",")} invalide`);
  }
}

export class UnprocessableException extends Http {
  constructor(params: any) {
    super(UNPROCESSABLE_ENTITY, "Paramètres invalide(s)", params);
  }
}

export class ForbiddenException extends Http {
  constructor(jwtProblem: boolean = false, message: string = "Non authorisé") {
    if (jwtProblem) {
      super(FORBIDDEN, `Session expiré`, { jwtExpired: true });
    } else {
      super(FORBIDDEN, message);
    }
  }
}