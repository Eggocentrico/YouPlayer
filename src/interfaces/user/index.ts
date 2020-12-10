import { IUser } from '../../database/user';

export default interface ICreateUser {
  name: IUser['name'];
  email: IUser['email'];
  playlists: IUser['playlists'];
  favPlaylistsIndexes: IUser['favPlaylistsIndexes'];
}
