import { UserRepository } from '../../business/user/UserRepository';
import {User} from '../../model/User'
import * as admin from 'firebase-admin'

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://labook-izabella-default-rtdb.firebaseio.com",
  projectId: "labook-izabella"
});

export class FireStoreDataBase implements UserRepository{
    private TABLE_NAME: string = "labook_user"
    
    async save(user: User): Promise<User>{
        try{
            await admin.firestore()
            .collection(this.TABLE_NAME)
            .doc(user.id)
            .set({
                name: user.name,
                email: user.email,
                password_hash: user.password_hash
            })

            return user

        }catch(error: any){
            throw new Error(error.message)
        }
    }

    async findUserByEmail(email: string): Promise<User | null> {
        try{
            const query = await admin.firestore()
            .collection(this.TABLE_NAME)
            .where("email", "==", email)
            .get()

            const user = query.docs[0] as any

            if(!user){
                return null
            }

            return {
                id: user.id,
                email: user.email,
                name: user.name,
                password_hash: user.password_hash
            }

        }catch(error: any){
            throw new Error(error.message)
        }
    }

    async findUserById(id: string): Promise<User | null>{
        
    }
}