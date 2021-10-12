import { UserBusiness } from "../src/business/UserBusiness";
import { UserDatabase } from "../src/data/UserDatabase";
import { User, USER_ROLES } from "../src/model/User";
import hashGenerator from "../src/services/hashGenerator";
import idGenerator from "../src/services/idGenerator";
import tokenGenerator from "../src/services/tokenGenerator";
import { HashGeneratorMock } from "./mocks/hashGenerator";
import { IdGeneratorMock } from "./mocks/idGenerator";
import { UserDatabaseMock } from "./mocks/userDatabase";

describe("cadastro", () => {
  test("deve retornar erro quando nome está vazio", async () => {
    expect.assertions(1);
    const userDB = new UserDatabaseMock();
    const business = new UserBusiness(
      userDB as UserDatabase,
      idGenerator,
      hashGenerator
    );

    try {
      await business.signup("", "darvas@gmail.com", "123123", "ADMIN");
    } catch (error) {
      expect(error.message).toEqual("Nome faltando");
    }
  });

  test("deve retornar erro quando email está vazio", async () => {
    expect.assertions(1);
    const userDB = new UserDatabaseMock();
    const business = new UserBusiness(
      userDB as UserDatabase,
      idGenerator,
      hashGenerator
    );

    try {
      await business.signup("Darvas", "", "123123", "ADMIN");
    } catch (error) {
      expect(error.message).toEqual("Email faltando");
    }
  });

  test("deve retornar erro quando email é inválido", async () => {
    expect.assertions(1);
    const userDB = new UserDatabaseMock();
    const business = new UserBusiness(
      userDB as UserDatabase,
      idGenerator,
      hashGenerator
    );

    try {
      await business.signup("Darvas", "darvas", "123123", "ADMIN");
    } catch (error) {
      expect(error.message).toEqual("Email inválido");
    }
  });

  test("deve retornar erro quando um email mais próximo de real, porém inválido é passo", async () => {
    expect.assertions(2);
    const userDB = new UserDatabaseMock();
    const business = new UserBusiness(
      userDB as UserDatabase,
      idGenerator,
      hashGenerator
    );

    try {
      await business.signup("Darvas", "@darvas", "123123", "ADMIN");
    } catch (error) {
      expect(error.message).toEqual("Email inválido");
    }

    try {
      await business.signup("Darvas", "darvas@", "123123", "ADMIN");
    } catch (error) {
      expect(error.message).toEqual("Email inválido");
    }

    // try {
    //   await business.signup("Darvas", "darvas@gmail", "123123", "ADMIN");
    // } catch(error) {
    //   expect(error.message).toEqual('Email inválido')
    // }
  });

  test("deve retornar erro quando a senha não é passada", async () => {
    expect.assertions(1);
    const userDB = new UserDatabaseMock();
    const business = new UserBusiness(
      userDB as UserDatabase,
      idGenerator,
      hashGenerator
    );

    try {
      await business.signup("Darvas", "darvas@gmail.com", "", "ADMIN");
    } catch (error) {
      expect(error.message).toEqual("Senha faltando");
    }
  });

  test("deve retornar erro quando a senha é inválida", async () => {
    expect.assertions(1);
    const userDB = new UserDatabaseMock();
    const business = new UserBusiness(
      userDB as UserDatabase,
      idGenerator,
      hashGenerator
    );

    try {
      await business.signup("Darvas", "darvas@gmail.com", "12345", "ADMIN");
    } catch (error) {
      expect(error.message).toEqual("Senha inválida");
    }
  });

  test("deve retornar erro quando a senha é inválida", async () => {
    expect.assertions(1);
    const userDB = new UserDatabaseMock();
    const business = new UserBusiness(
      userDB as UserDatabase,
      idGenerator,
      hashGenerator
    );

    try {
      await business.signup(
        "Darvas",
        "darvas@gmail.com",
        "123456",
        "bananinha"
      );
    } catch (error) {
      expect(error.message).toEqual("Tipo de usuário inválido");
    }
  });

  test("deve criar usuário e retornar token", async () => {
    const userDB = new UserDatabaseMock();
    const hashGenerator = new HashGeneratorMock();
    const business = new UserBusiness(
      userDB as UserDatabase,
      new IdGeneratorMock(),
      hashGenerator
    );

    const response = await business.signup(
      "Darvas",
      "darvas@gmail.com",
      "123456",
      "ADMIN"
    );

    expect(userDB.createUser).toHaveBeenCalledTimes(1);
    expect(userDB.createUser).toHaveBeenCalledWith(
      new User(
        "1",
        "Darvas",
        "darvas@gmail.com",
        "senha encriptada",
        USER_ROLES.ADMIN
      )
    );
    expect(hashGenerator.hash).toHaveBeenCalledWith("123456");

    const tokenPayload = tokenGenerator.verify(response.accessToken);

    expect(tokenPayload.id).toBe("1");
    expect(tokenPayload.role).toBe(USER_ROLES.ADMIN);
  });
});

describe("login", () => {
  test("deve retornar erro quando o email não existe", async () => {
    expect.assertions(1);
    const userDB = new UserDatabaseMock();

    // TODO Pensar em esquema melhor para sobrescrever a implementação
    (userDB.getUserByEmail as any).mockImplementation((): any => undefined);

    const hashGenerator = new HashGeneratorMock();
    const business = new UserBusiness(
      userDB as UserDatabase,
      new IdGeneratorMock(),
      hashGenerator
    );

    try {
      await business.login("darvas@gmail.com", "123456");
    } catch (error) {
      expect(error.message).toBe("Email não existe");
    }
  });

  test("deve retornar erro quando a senha está incorreta", async () => {
    expect.assertions(1);
    const userDB = new UserDatabaseMock();
    const hashGenerator = new HashGeneratorMock();
    hashGenerator.compareHash.mockImplementation(async () => false);

    const business = new UserBusiness(
      userDB as UserDatabase,
      new IdGeneratorMock(),
      hashGenerator
    );

    try {
      await business.login("darvas@gmail.com", "123456");
    } catch (error) {
      expect(error.message).toBe("Senha incorreta");
    }
  });

  test("deve retornar o token quando as credenciais estão corretas", async () => {
    const userDB = new UserDatabaseMock();
    (userDB.getUserByEmail as any).mockImplementation(
      async (): Promise<User> => {
        return new User("50", "Darvas", "darvas@gmail.com", "senha encriptada", USER_ROLES.NORMAL);
      }
    );
    const hashGenerator = new HashGeneratorMock();
    const business = new UserBusiness(
      userDB as UserDatabase,
      new IdGeneratorMock(),
      hashGenerator
    );

    const response = await business.login("darvas@gmail.com", "123456");

    const verifyToken = tokenGenerator.verify(response.accessToken);

    expect(verifyToken.id).toBe("50");
    expect(verifyToken.role).toBe(USER_ROLES.NORMAL);
    expect(hashGenerator.compareHash).toHaveBeenCalledWith("123456", "senha encriptada")
    expect(userDB.getUserByEmail).toHaveBeenCalledWith("darvas@gmail.com")
  });
});
