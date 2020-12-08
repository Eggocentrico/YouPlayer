import ISong from './song';

export default interface IPlaylist {
  name: string;
  createdAt: number;
  ownerId: number;
  songs: ISong[];
  favSongsIndexes: number[];
}
