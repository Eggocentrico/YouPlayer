import ICreateUser from '../../interfaces/user';
import { User } from '../../database';

export default async function CreateUser(data: ICreateUser): Promise<void> {
  const newUser = new User(data);
  await newUser.save();
}
