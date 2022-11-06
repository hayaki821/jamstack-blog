import React, { FC, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const GuestLayout: FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        padding: '20px',
        background: '#daa',
      }}>
      {children}
    </div>
  );
};

export default GuestLayout;
