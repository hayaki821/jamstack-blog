import React, { Suspense } from 'react';
import { client } from 'libs/client';
import styles from 'styles/Home.module.scss';
import { notFound } from 'next/navigation';

//SSG
const getBlogById = async (id: string) => {
  const data = await client.get({ endpoint: 'blog', contentId: id });

  return data;
};

// SSG用のパスを設定する
export const generateStaticParams = async () => {
  const data = await client.get({ endpoint: 'blog' });

  return data.contents.map(content => ({
    id: content.id,
  }));
};

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const blog = await getBlogById(id);
  if (!blog) {
    notFound();
  }

  return (
    <Suspense fallback="loading...">
      <main className={styles.main}>
        <h1 className={styles.title}>{blog.title}</h1>
        <p className={styles.publishedAt}>{blog.publishedAt}</p>
        <div
          dangerouslySetInnerHTML={{ __html: `${blog.body}` }}
          className={styles.post}></div>
      </main>
    </Suspense>
  );
}
