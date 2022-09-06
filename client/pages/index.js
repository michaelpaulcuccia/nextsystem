import React from 'react';
import Head from 'next/head'
import Container from '../components/layout/Container';
import Box from '../components/common/Box';

export default function index() {
  return (
    <>
    <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Box borderColor='green'>
          Hello World
        </Box>
      </Container>
    </>
  )
}

