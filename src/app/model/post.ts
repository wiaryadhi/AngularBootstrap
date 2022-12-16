import {IPost} from "./i-post";

export class Post implements IPost {
  id: number;
  title: string;
  body: string;
  isPublished: boolean;
  url:string;
  constructor(id: number, title: string, body: string, isPublished: boolean, url: string) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.isPublished = isPublished;
    this.url = url;
  }
}
