import React, { FunctionComponent } from 'react';
import type { GetStaticProps } from 'next';
import { client } from 'libs/microCMS';
import styles from 'styles/Home.module.scss';
import { EndPoints } from 'microCMS/types/response';
import { ParsedUrlQuery } from 'node:querystring';

interface Props {
  blog: EndPoints['get']['blog'];
}

// 1. Paramsの型を定義し、ParsedUrlQueryをextendsする
interface Params extends ParsedUrlQuery {
  id: string;
}
//SSG
export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const id = params?.id ?? '';
  const data = await client.blog._id(id).$get();
  return {
    props: {
      blog: data,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.blog.$get();
  const paths = data.contents.map(content => ({
    params: { id: content.id },
  }));

  // const paths = data.contents.map(content => ({
  //   params: `test/blog/${content.id}`,
  // }));
  return {
    paths,
    fallback: false,
  };
};

const BlogId: FunctionComponent<{ blog: EndPoints['get']['blog'] }> = ({
  blog,
}) => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{blog.title}</h1>
      <p className={styles.publishedAt}>{blog.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{ __html: `${blog.body}` }}
        className={styles.post}></div>
    </main>
  );
};

export default BlogId;
