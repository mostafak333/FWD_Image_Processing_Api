import fs from 'fs';
import path from 'path';
export class File {
  static imagesPath = path.resolve(__dirname, '../assets/full/');
  static thumbPath = path.join(__dirname, '../assets/thumb/');

  static async imageExistInFull(imagename: string): Promise<null | boolean> {
    if (fs.existsSync(this.imagesPath + '/' + imagename + '.jpg')) {
      return true;
    } else {
      return null;
    }
  }

  static async thumbFileExist(): Promise<null | boolean> {
    if (fs.existsSync(this.thumbPath)) {
      return true;
    } else {
      return null;
    }
  }

  static async createThumb(): Promise<void> {
    fs.mkdirSync(this.thumbPath);
  }

  static async allImages(): Promise<string[] | null> {
    const result: string[] = fs
      .readdirSync(this.imagesPath)
      .map((filename: string): string => filename.split('.')[0]);
    if (result.length !== 0) {
      return result;
    } else {
      return null;
    }
  }
}
