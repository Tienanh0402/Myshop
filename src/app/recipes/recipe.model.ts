
export class Recipe{
    public code: string;
    public name: string;
    public imagePath: string;

    constructor(code: string, name: string, imagePath:string){
        this.code = code;
        this.name = name;
        this.imagePath = imagePath;
    }
}