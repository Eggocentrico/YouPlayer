import IPlaylist from '../playlist';

export default interface IUser {
  name: string;
  email: string;
  password: string;
  playlists: IPlaylist[];
  favPlaylistsIndexes: number[];
}
