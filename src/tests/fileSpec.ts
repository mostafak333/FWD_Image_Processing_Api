import { File } from '../file';

describe('Test File Functions', (): void => {
  it('Check if image exist from it`s name and return null when image not exist \n ex: pass "fjor" as name', async (): Promise<void> => {
    const result: null | boolean = await File.imageExistInFull('fjor');
    expect(result).toBeNull();
  });
  it('Check if thumb File exist and return true when file exist', async (): Promise<void> => {
    const result: null | boolean = await File.thumbFileExist();
    expect(result).toBeTruthy();
  });
  it('Get all images from images file and return null file is empty ', async (): Promise<void> => {
    const result = await File.allImages();
    expect(result).not.toBeNull();
  });
});
