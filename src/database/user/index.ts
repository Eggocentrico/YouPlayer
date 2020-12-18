import { Schema, Document } from 'mongoose';
import { IPlaylist, PlaylistSchema } from '../playlist';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  playlists: IPlaylist[];
  favPlaylistsIndexes: number[];
}

export const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  playlist: { type: [PlaylistSchema], required: true },
  favPlaylistsIndexes: { type: [Number], required: true },
});
