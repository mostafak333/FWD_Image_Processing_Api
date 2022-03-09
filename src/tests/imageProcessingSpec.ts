import { Image, ImageProcessingCalss } from '../imageProcessing';
const IPC = new ImageProcessingCalss();
const img: Image = {
  name: 'fjord',
  width: 100,
  high: 100
};
describe('Test Resizing Image With Sharp ', (): void => {
  it('Reszie photo and put it in thumb file with new name as fjord-100X100.jpg and return true \n ex: pass "fjord" as name,100 as width, 100 as high', async (): Promise<void> => {
    const result: null | boolean = await IPC.imageProcess(img);
    expect(result).toBeTruthy();
  });
});
