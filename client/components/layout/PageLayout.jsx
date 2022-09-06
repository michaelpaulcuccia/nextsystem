import React from 'react';
import HeaderAndNav from './HeaderAndNav/HeaderAndNav';

export default function PageLayout( { children }) {
  return (
    <>
      <HeaderAndNav />
      <main>{children}</main>
    </>
  )
}
