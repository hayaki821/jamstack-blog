import React, { FunctionComponent, Suspense, use } from 'react';
import Link from 'next/link';
import { client } from 'libs/client';
import styles from 'styles/Home.module.scss';
import { wait } from 'utils/time';

//SSG
// export const getStaticProps: GetStaticProps = async ({
//   params,
// }: GetStaticPropsContext) => {
//   const data = await client.get({ endpoint: 'blog' });
//   console.log(process.env.API_KEY, data);
//   return {
//     props: {
//       blog: data.contents,
//     },
//   };
// };
async function getBlog() {
  const data = await client.get({ endpoint: 'blog' });
  // throw Error();
  return data.contents;
}

const Blogs: FunctionComponent<{ promise }> = async ({ promise }) => {
  const blog = await promise;

  return (
    <div className={styles.container}>
      {blog.map(blog => (
        <li key={blog.id}>
          <Link href={`blog/${blog.id}`}>{blog.title}</Link>
        </li>
      ))}
    </div>
  );
};

export default async function Page() {
  // const _ = await wait(10000);
  const _blog = getBlog();
  // // Wait for the artist...
  // const blog = await _blog;
  return (
    <Suspense fallback="loading...">
      <Blogs promise={_blog} />
    </Suspense>
  );
}
