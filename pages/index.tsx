import { GetStaticProps } from 'next';
import React from 'react';
import IPlaylist from '../interfaces/playlist';
import ISong from '../interfaces/playlist/song';

export default function IndexPage({
  data,
}: {
  data: IPlaylist;
}): React.ReactElement {
  return <h1>{data.name}</h1>;
}

export const getStaticProps: GetStaticProps = async (_) => {
  const songs: ISong[] = [
    {
      name: 'Song 1',
      duration: 21334,
    },
  ];
  const data: IPlaylist = {
    name: 'New Playlist',
    createdAt: 213890,
    ownerId: 1,
    songs,
    favSongsIndexes: [0],
  };
  return { props: { data } };
};
