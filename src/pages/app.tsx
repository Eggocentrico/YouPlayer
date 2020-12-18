/** @jsx jsx */

import { GetStaticProps } from 'next';
import { Card, jsx } from 'theme-ui';
import Navbar from '../components/Navbar';

export default function IndexPage(): React.ReactElement {
  return (
    <div className="main">
      <Navbar name="jhonatan"></Navbar>
      <Card sx={{ bg: 'muted', p: '1rem' }}>
        <p>Hello</p>
      </Card>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (_) => {
  return { props: {} };
};
