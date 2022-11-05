import React from 'react';
import { FC, ReactNode } from 'react';

// デフォルトの404ページ
// export const dynamicParams = false;

type Props = {
  children?: ReactNode;
};

const HomeLayout: FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        padding: '120px',
        background: '#ddd',
      }}>
      {children}
    </div>
  );
};

export default HomeLayout;
