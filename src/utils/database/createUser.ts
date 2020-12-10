import mongoose from 'mongoose';
import ICreateUser from '../../interfaces/user';
import User from '../../database/user';

mongoose.connect('mongodb://localhost:27017/yt-player', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async function CreateUser(data: ICreateUser): Promise<void> {
  const newUser = new User(data);
  await newUser.save();
}
