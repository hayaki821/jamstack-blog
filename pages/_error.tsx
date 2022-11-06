import React from 'react';
import { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';
interface Props {
  statusCode: number;
}
const Error: NextPage<Props> = ({ statusCode }) => {
  const router = useRouter();
  return (
    <>
      <p>{statusCode}エラーが発生しました</p>
      <button onClick={() => router.back()}>back</button>
    </>
  );
};

Error.getInitialProps = async ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode ?? 500 : 404;
  return { statusCode };
};

export default Error;
