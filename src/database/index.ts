import mongoose from 'mongoose';
import { IUser, UserSchema } from './user';

mongoose.connect('mongodb://localhost:27017/yt-player', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export const User = mongoose.model<IUser>('User', UserSchema);
