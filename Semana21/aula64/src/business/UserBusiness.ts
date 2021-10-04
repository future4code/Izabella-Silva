import { CustomError } from "../errors/CustomError";
import { User, stringToUserRole } from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import hashGenerator, { HashGenerator } from "../services/hashGenerator";
import { IdGenerator } from "../services/idGenerator";
import tokenGenerator from "../services/tokenGenerator";

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private idGenerator: IdGenerator,
    private hashGenerator: HashGenerator
  ) {}

  private isEmail(email: string) {
    const emailRegexp =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    return emailRegexp.test(email);
  }

  public async signup(
    name: string,
    email: string,
    password: string,
    role: string
  ) {
    try {
      if (!email) {
        throw new CustomError(422, "Email faltando");
      }

      if (!password) {
        throw new CustomError(422, "Senha faltando");
      }

      if (!name || !password || !role) {
         throw new CustomError(422, "Nome faltando");
       }

      if (!this.isEmail(email)) {
        throw new CustomError(422, "Email inválido");
      }

      if (password.length < 6) {
        throw new CustomError(422, "Senha inválida");
      }

      const id = this.idGenerator.generate();

      const cypherPassword = await this.hashGenerator.hash(password);

      await this.userDatabase.createUser(
        new User(id, name, email, cypherPassword, stringToUserRole(role))
      );

      const accessToken = tokenGenerator.generate({
        id,
        role,
      });
      return { accessToken };
    } catch (error) {
      if (error.message.includes("key 'email'")) {
        throw new CustomError(409, "Email already in use");
      }

      throw new CustomError(error.statusCode, error.message);
    }
  }

  public async login(email: string, password: string) {
    try {
      if (!email || !password) {
        throw new CustomError(422, "Missing input");
      }

      const user = await this.userDatabase.getUserByEmail(email);

      if (!user) {
        throw new CustomError(401, "Email não existe");
      }

      const isPasswordCorrect = await this.hashGenerator.compareHash(
        password,
        user.getPassword()
      );

      if (!isPasswordCorrect) {
        throw new CustomError(401, "Senha incorreta");
      }

      const accessToken = tokenGenerator.generate({
        id: user.getId(),
        role: user.getRole(),
      });

      return { accessToken };
    } catch (error) {
      throw new CustomError(error.statusCode, error.message);
    }
  }
}
