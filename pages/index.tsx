import React from 'react';
import Link from 'next/link';
import { client } from 'libs/microCMS';
import styles from 'styles/Home.module.scss';
import { blog } from 'microCMS/types/response';

//SSG
export const getStaticProps = async () => {
  const data = await client.blog.$get({ query: { limit: 10 } });
  return {
    props: {
      blog: data.contents,
    },
  };
};

export default function Home({ blog }: { blog: blog[] }) {
  return (
    <div className={styles.container}>
      {blog.map(blog => (
        <li key={blog.id}>
          <Link href={`blog/${blog.id}`}>{blog.title}</Link>
        </li>
      ))}
    </div>
  );
}
