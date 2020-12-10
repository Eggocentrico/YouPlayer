import { IPlaylist } from '../../database/playlist';

export default interface ICreatePlaylist {
  name: IPlaylist['name'];
  createdAt: IPlaylist['createdAt'];
  ownerId: IPlaylist['ownerId'];
  songs: IPlaylist['songs'];
  favSongsIndexes: IPlaylist['favSongsIndexes'];
}
