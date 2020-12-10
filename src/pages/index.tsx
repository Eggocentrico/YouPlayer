import { GetStaticProps } from 'next';
import React from 'react';
import ICreatePlaylist from '../interfaces/playlist';
import ICreateSong from '../interfaces/playlist/song';

export default function IndexPage({
  data,
}: {
  data: ICreatePlaylist;
}): React.ReactElement {
  return <h1>{data.name}</h1>;
}

export const getStaticProps: GetStaticProps = async (_) => {
  const songs: ICreateSong[] = [
    {
      name: 'Song 1',
      duration: 21334,
    },
  ];
  const data: ICreatePlaylist = {
    name: 'Newo Playlist',
    createdAt: 213890,
    ownerId: 1,
    songs,
    favSongsIndexes: [0],
  };
  return { props: { data } };
};
