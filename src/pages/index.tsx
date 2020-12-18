/** @jsx jsx */

import { GetStaticProps } from 'next';
import Link from 'next/link';
import { Card, jsx } from 'theme-ui';
import Navbar from '../components/Navbar';

export default function IndexPage(): React.ReactElement {
  return (
    <div className="main">
      <Navbar></Navbar>
      <Card sx={{ bg: 'primary', p: '1rem' }}>
        <h1 sx={{ m: 0, mt: '.5em', fontWeight: 800, color: 'darken' }}>
          Welcome to YouPlayer
        </h1>
        <p sx={{ mt: '.2em' }}>
          Your player for youtube, what are you waiting for?{' '}
          <Link href="/user/signup">
            <a
              sx={{
                textDecoration: 'none',
                transition: '.1s',
                color: 'muted',
                fontWeight: 600,
                '&:hover': {
                  color: 'textVariants.accent',
                },
              }}
            >
              Join us
            </a>
          </Link>
        </p>
      </Card>
      <Card sx={{ p: '1rem' }}>
        <p>Contenido</p>
      </Card>
      <Card sx={{ bg: 'muted', p: '1rem' }}>
        <p>Hello</p>
      </Card>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (_) => {
  return { props: {} };
};
