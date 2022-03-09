import sharp from 'sharp';
import path from 'path';
import { File } from './file';
export type Image = {
  name: string;
  width: number;
  high: number;
};
export class ImageProcessingCalss {
  async imageProcess(img: Image): Promise<null | boolean> {
    const photo: string = path.join(File.imagesPath, img.name + '.jpg');
    const rename: string = path.join(
      File.thumbPath,
      img.name + '-' + img.width + 'X' + img.high + '.jpg'
    );
    try {
      await sharp(photo)
        .resize({ width: img.width, height: img.high })
        .toFile(rename);
      return true;
    } catch (e) {
      console.log({ error: e });
      return null;
    }
  }
}
