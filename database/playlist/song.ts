import { Schema } from 'mongoose';

export interface ISong {
  name: string;
  duration: number;
}

export const SongSchema: Schema = new Schema({
  name: { type: String, required: true },
  duration: { type: Number, required: true },
});
