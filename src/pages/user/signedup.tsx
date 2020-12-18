/** @jsx jsx */

import { jsx } from 'theme-ui';
const { Card } = require('theme-ui');
import React from 'react';
import Navbar from '../../components/Navbar';
import { GetStaticProps } from 'next';

export default function SignedUp(): React.ReactElement {
  return (
    <>
      <Navbar></Navbar>
      <div sx={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
        <Card
          sx={{
            bg: 'muted',
            p: '2rem',
            m: '2rem',
            borderRadius: '.4rem',
            maxWidth: '25rem',
            width: '90%',
            border: '1px solid #0A0A0A',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <svg
            sx={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              display: 'block',
              strokeWidth: 2,
              stroke: '#fff',
              strokeMiterlimit: 10,
              margin: '10% auto',
              '@keyframes fill': {
                '100%': {
                  boxShadow: 'inset 0px 0px 0px 30px #d61f34',
                },
              },
              animation:
                'fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both',
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              sx={{
                strokeDasharray: 166,
                strokeDashoffset: 166,
                strokeWidth: 2,
                strokeMiterlimit: 10,
                stroke: '#d61f34',
                fill: 'none',
                '@keyframes stroke': {
                  '100%': {
                    strokeDashoffset: 0,
                  },
                },
                animation:
                  'stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards',
              }}
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              sx={{
                transformOrigin: '50% 50%',
                strokeDasharray: 48,
                strokeDashoffset: 48,
                '@keyframes stroke': {
                  '100%': {
                    strokeDashoffset: 0,
                  },
                },
                animation:
                  'stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards',
              }}
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
          <p sx={{ textAlign: 'center', mt: 0 }}>
            <b>Successfully</b> created a new account
          </p>
        </Card>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  console.log(ctx);
  return {
    props: {},
  };
};
