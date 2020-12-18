/** @jsx jsx */

import React from 'react';
import { Button, jsx } from 'theme-ui';
import Link from 'next/link';

export default function Navbar({
  name,
}: {
  name?: string;
}): React.ReactElement {
  return (
    <div className="main" sx={{ m: 0 }}>
      <nav
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pl: '1rem',
          pr: '1rem',
          bg: 'muted',
          m: 0,
          border: '1px solid #0A0A0A',
        }}
      >
        <Link href="/">
          <a
            sx={{
              textDecoration: 'none',
              transition: '.1s',
              '&:hover': { color: 'primary' },
            }}
          >
            <h1 sx={{ fontWeight: 800 }}>YouPlayer</h1>
          </a>
        </Link>
        {name ? (
          <ul sx={{ display: 'flex', listStyle: 'none', alignItems: 'center' }}>
            <li sx={{ pl: '.5rem', pr: '.5rem' }}>
              <Link href="/user/signup">
                <Button
                  sx={{
                    transition: '.1s',
                    color: 'muted',
                    fontFamily: 'body',
                    fontWeight: 600,
                    '&:hover': {
                      bg: 'secondary',
                    },
                    textTransform: 'capitalize',
                  }}
                >
                  {name}
                </Button>
              </Link>
            </li>
          </ul>
        ) : (
          <ul sx={{ display: 'flex', listStyle: 'none', alignItems: 'center' }}>
            <li sx={{ pl: '.5rem', pr: '.5rem' }}>
              <Link href="/user/login">
                <a
                  sx={{
                    textDecoration: 'none',
                    fontWeight: 600,
                    transition: '.1s',
                    '&:hover': { color: 'primary' },
                  }}
                >
                  Sign in
                </a>
              </Link>
            </li>
            <li sx={{ pl: '.5rem', pr: '.5rem' }}>
              <Link href="/user/signup">
                <Button
                  sx={{
                    transition: '.1s',
                    color: 'muted',
                    fontFamily: 'body',
                    fontWeight: 600,
                    '&:hover': {
                      bg: 'secondary',
                    },
                  }}
                >
                  Sign up
                </Button>
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}
