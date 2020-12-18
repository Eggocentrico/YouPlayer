import { IPlaylist } from '../../database/playlist';

export default interface ICreatePlaylist {
  name: IPlaylist['name'];
  createdAt: IPlaylist['createdAt'];
  owner: IPlaylist['owner'];
  songs: IPlaylist['songs'];
  favSongsIndexes: IPlaylist['favSongsIndexes'];
}
