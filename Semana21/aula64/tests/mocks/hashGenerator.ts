import bcrypt from "bcryptjs";

export class HashGeneratorMock {
   public hash = jest.fn(async (s: string): Promise<any> => {
      return 'senha encriptada'
   })

   public compareHash = jest.fn(async (s: string, hash: string): Promise<boolean> => {
      return true
   })
}