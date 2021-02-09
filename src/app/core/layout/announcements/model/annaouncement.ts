export class Announcement {
  id: number;
  title: string;
  author: string;
  description: string;
  imagePath: string;
  rate: number;
  
  constructor(id: number, title: string, author: string, description: string, imagePath: string, rate: number) {
      this.id=id;
      this.title=title;
      this.author=author;
      this.description=description;
      this.imagePath=imagePath;
      this.rate= rate;
  }
}

