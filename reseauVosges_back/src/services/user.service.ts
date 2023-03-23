import { FindOptions } from "../utils/interfaces";
import { User } from "../models/user";
import { NotFoundException } from "../exceptions/exceptions";
import * as bcrypt from "bcrypt";
import { BaseService } from "./base.service";

const toExclude = ["pwd"];

export class UserService extends BaseService {
  public name = "Utilisateur";

  public async findAll(): Promise<User[]> {
    return User.findAll({ attributes: { exclude: toExclude }, order: [["name", "ASC"]] });
  }

  public async findPaginate(options: FindOptions): Promise<{ rows: User[]; count: number }> {
    const { limit, offset, order, attributes } = options;
    return await User.findAndCountAll({
      limit,
      offset,
      ...(attributes && {
        attributes: { include: attributes, exclude: toExclude },
      }),
    });
  }

  public async findById(id: string): Promise<User> {
    const result = await User.findByPk(id, { attributes: { exclude: toExclude } });
    if (result === null) {
      throw new NotFoundException(this.name);
    } else {
      return result;
    }
  }

  public async findByEmail(email: string): Promise<User | null> {
    return User.findOne({ where: { email } });
  }

  public async add(user: User): Promise<User> {
    return User.create(user);
  }

  public async update(user: User, body: User): Promise<User> {
    let { password } = body;
    if (password && password) {
      password = await bcrypt.hash(password, 10);
      body.password = password;
    }
    await user.update(body);
    return user;
  }

  public async delete(user: User): Promise<void> {
    await User.destroy({ where: { id: user.id } });
  }
}
