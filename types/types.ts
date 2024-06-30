export interface BlogPost {
  _id: string;
  title: string;
  short_desc: string;
  description: string;
  author: string;
  date: string;
  tag: string;
  new: boolean;
  trending: boolean;
  image: string;
}
