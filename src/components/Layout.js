import React from 'react';
import useDropShadow from '@/hooks/useDropShadow';

const Layout = ({ children }) => {
  useDropShadow();

  return <div>{children}</div>;
};

export default Layout;
