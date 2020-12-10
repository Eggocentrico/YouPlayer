import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from '../../database/user';
import ICreateUser from '../../interfaces/user';

mongoose.connect('mongodb://localhost:27017/yt-player', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async function GetUser(
  id: string,
  password: string
): Promise<ICreateUser | null> {
  const user = await User.findById(id);
  if (user) {
    const parsedUser: ICreateUser = {
      name: user['name'],
      email: user['email'],
      playlists: user['playlists'],
      favPlaylistsIndexes: user['favPlaylistsIndexes'],
    };
    const comparation = await bcrypt.compare(password, user['password']);
    if (comparation) return parsedUser;
  }
  return null;
}
