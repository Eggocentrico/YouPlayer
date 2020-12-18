/** @jsx jsx */

import { GetStaticProps } from 'next';
import { jsx } from 'theme-ui';
const { Card } = require('theme-ui');
import Navbar from '../components/Navbar';

export default function IndexPage(): React.ReactElement {
  return (
    <div className="main">
      <Navbar name="jhonatan"></Navbar>
      <Card sx={{ bg: 'muted', p: '1rem' }}>
        <p>Work in progress, Jhonatan David Asprilla Arango</p>
      </Card>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (_) => {
  return { props: {} };
};
