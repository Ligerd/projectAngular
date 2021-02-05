export  class ShopItem{
    public name: string;
    public title: string;
    public description: string;
    public author: string;
    public price: number;
    public imagePath: string;
    constructor(name: string, title:  string, desc: string, author: string, price: number, imPath:  string){
        this.name=name;
        this.title=title;
        this.description=desc;
        this.author=author;
        this.price=price;
        this.imagePath=imPath;
    }
}