/** @jsx jsx */

import Axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import { jsx } from 'theme-ui';
const { Box, Card, Label, Input, Button } = require('theme-ui');
import Navbar from '../../components/Navbar';

export default function IndexPage(): React.ReactElement {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="signup">
      <Navbar></Navbar>
      <div
        sx={{
          display: 'flex',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <Card
          sx={{
            bg: 'muted',
            p: '2rem',
            m: '2rem',
            borderRadius: '.4rem',
            maxWidth: '25rem',
            width: '90%',
            border: '1px solid #0A0A0A',
          }}
        >
          <Box
            as="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
            onSubmit={(e) => {
              e.preventDefault();
              const formData = {
                username,
                email,
                password,
              };
              Axios.post('/api/signup', formData).then((r) => {
                if (r.data.success) router.push('/user/signedup');
              });
            }}
          >
            <Label
              htmlFor="username"
              sx={{ fontFamily: 'body', fontWeight: 600 }}
            >
              Username
            </Label>
            <Input
              name="username"
              id="username"
              placeholder="someusername"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{
                mb: '1rem',
                mt: '.5rem',
                border: '1px solid #0A0A0A',
                bg: '#141414',
                fontFamily: 'body',
              }}
              required
            ></Input>
            <Label htmlFor="email" sx={{ fontFamily: 'body', fontWeight: 600 }}>
              Email
            </Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="something@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                mb: '1rem',
                mt: '.5rem',
                bg: '#141414',
                border: '1px solid #0A0A0A',
                fontFamily: 'body',
              }}
              required
            ></Input>
            <Label
              htmlFor="password"
              sx={{ fontFamily: 'body', fontWeight: 600 }}
            >
              Password
            </Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="somepassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                mb: '2rem',
                mt: '.5rem',
                bg: '#141414',
                border: '1px solid #0A0A0A',
                fontFamily: 'body',
              }}
              required
            ></Input>
            <Button
              sx={{ fontFamily: 'body', fontWeight: 600, color: 'muted' }}
            >
              Create new account
            </Button>
          </Box>
        </Card>
      </div>
    </div>
  );
}
