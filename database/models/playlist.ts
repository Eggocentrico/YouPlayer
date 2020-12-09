import mongoose, { Schema, Document } from 'mongoose';
import IPlaylist from '../../interfaces/playlist';

export interface ISPlaylist extends IPlaylist, Document {}

const SongSchema: Schema = new Schema({
  name: { type: String, required: true },
  duration: { type: Number, required: true },
});

const PlaylistSchema: Schema = new Schema({
  name: { type: String, required: true, unique: true },
  createdAt: { type: String, required: true },
  ownerId: { type: Number, required: true },
  songs: { type: [SongSchema], required: true },
  favSongsIndexes: { type: [Number], required: true },
});

export default mongoose.model<ISPlaylist>('Playlist', PlaylistSchema);
