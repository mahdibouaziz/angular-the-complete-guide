export class Recipe {
  name: string;
  description: string;
  imagePath: string;

  constructor(name: string, desciption: string, imagePath: string) {
    this.name = name;
    this.description = desciption;
    this.imagePath = imagePath;
  }
}
