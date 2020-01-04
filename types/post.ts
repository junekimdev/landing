import { ParsedUrlQuery } from 'querystring';

export interface IPost {
  id: string;
  title: string;
  time: string;
  image?: string;
  imageWidth?: string;
  imageHeight?: string;
  body: string | JSX.Element;
}

export interface IPropsPagePost {
  pathname: string;
  query: ParsedUrlQuery;
  post: IPost;
}

export interface IPropsCompPost {
  post: IPost;
}

export interface IPropsPageBlog {
  posts: Array<IPost>;
}

export interface IPropsCompBlog {
  posts: Array<IPost>;
}
