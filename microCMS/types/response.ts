type Reference<T, R> = T extends 'get' ? R : string | null;
interface GetsType<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}
type DateType = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
type Structure<T, P> = T extends 'get'
  ? { id: string } & DateType & Required<P>
  : T extends 'gets'
  ? GetsType<{ id: string } & DateType & Required<P>>
  : Partial<DateType> & (T extends 'patch' ? Partial<P> : P);

export type tags<T = 'get'> = Structure<
  T,
  {
    /**
     * タグ名
     */
    name: string;
  }
>;

export type categories<T = 'get'> = Structure<
  T,
  {
    /**
     * カテゴリ名
     */
    name: string;
  }
>;

export type blog<T = 'get'> = Structure<
  T,
  {
    /**
     * タイトル
     */
    title: string;
    /**
     * アイキャッチ
     */
    image?: { url: string; width: number; height: number };
    /**
     * 目次
     */
    toc_visible?: boolean;
    /**
     * カテゴリー
     */
    category: Reference<T, categories<T>>;
    /**
     * タグ
     */
    tags?: Reference<T, tags<T>>[];
    /**
     * 本文
     */
    body: string;
  }
>;

export interface EndPoints {
  get: {
    tags: tags<'get'>;
    categories: categories<'get'>;
    blog: blog<'get'>;
  };
  gets: {
    tags: tags<'gets'>;
    categories: categories<'gets'>;
    blog: blog<'gets'>;
  };
  post: {
    tags: tags<'post'>;
    categories: categories<'post'>;
    blog: blog<'post'>;
  };
  put: {
    tags: tags<'put'>;
    categories: categories<'put'>;
    blog: blog<'put'>;
  };
  patch: {
    tags: tags<'patch'>;
    categories: categories<'patch'>;
    blog: blog<'patch'>;
  };
}
