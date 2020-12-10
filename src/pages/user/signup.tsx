import { GetStaticProps } from 'next';
import React from 'react';

export default function IndexPage(): React.ReactElement {
  return <h1>Hello</h1>;
}

export const getStaticProps: GetStaticProps = async (_) => {
  return { props: {} };
};
