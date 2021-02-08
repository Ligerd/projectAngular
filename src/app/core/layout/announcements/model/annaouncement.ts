export class Announcement {
  id: number;
  name: string;
  author: string;
  description: string;
  imagePath: string;
  
  constructor(id: number, name: string, author: string, description: string, imagePath: string) {
      this.id=id;
      this.name=name;
      this.author=author;
      this.description=description;
      this.imagePath=imagePath;
  }
}

