import { IUser } from '../../database/user';

export default interface ICreateUser {
  name: IUser['name'];
  email: IUser['email'];
  password?: IUser['password'];
  playlists: IUser['playlists'];
  favPlaylistsIndexes: IUser['favPlaylistsIndexes'];
}
