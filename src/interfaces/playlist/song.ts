import { ISong } from '../../database/playlist/song';

export default interface ICreateSong {
  name: ISong['name'];
  duration: ISong['duration'];
}
