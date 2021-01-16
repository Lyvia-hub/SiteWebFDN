export class Article {

  //readonly id: string;
  type: string;
  title: string;
  catchPhrase: string;
  hashtags: string; //maybe a tab would be better
  description: string;
  img: string;
  imgs: [];
  videoLink: string;
  videos: [];
  content: string;
  author: string;
  publicationDate: string;

  constructor(options: {
    //id?: string,
    type?: string,
    title?: string,
    catchPhrase?: string,
    hashtags?: string,
    description?: string,
    content?: string,
    author?: string,
    publicationDate?: string,
  } = {}) {
    //this.id = options.id || null;
    this.title = options.title || '';
    this.catchPhrase = options.catchPhrase || '';
    this.hashtags = options.hashtags || '';
    this.description = options.description || '';
    this.content = options.content || '';
    this.author = options.author || '';
    this.publicationDate = options.publicationDate || '';
  }

}
