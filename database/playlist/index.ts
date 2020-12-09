import { Schema } from 'mongoose';
import { IUser } from '../user';
import { ISong, SongSchema } from './song';

export interface IPlaylist {
  name: string;
  createdAt: number;
  owner: IUser['_id'];
  songs: ISong[];
  favSongsIndexes: number[];
}

export const PlaylistSchema: Schema = new Schema({
  name: { type: String, required: true, unique: true },
  createdAt: { type: Number, required: true },
  owner: { type: Schema.Types.ObjectId, required: true },
  songs: { type: [SongSchema], required: true },
  favSongsIndexes: { type: [Number], required: true },
});
