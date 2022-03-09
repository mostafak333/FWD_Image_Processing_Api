import express from 'express';
import { Image, ImageProcessingCalss } from '../../imageProcessing';
import path from 'path';
import { File } from '../../file';
const imageApi: express.Router = express.Router();
const imgClass = new ImageProcessingCalss();

// resize that will be called with /image/resize route
const resize = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  const img: Image = {
    name: req.query.name as string,
    width: parseInt(req.query.width as string),
    high: parseInt(req.query.high as string)
  };
  //check if name & high & width
  if (!img.name && !img.width && !img.high) {
    res.send('Please assign Image`s Name & Width & Hight 🗣');
    //return to not to set headers after they are sent to the client
    return;
  }
  //check if high & width assiged
  if (!img.width && !img.high) {
    res.send('Please assign Image`s Width ↔️ & Hight ↕️');
    return;
  }
  //check if width assigned and not equal 0
  if (!img.width || img.width < 0) {
    res.send('Image`s Width must assigned and be Postive ↔️');
    return;
  }
  //check if high assigned and not equal 0
  if (!img.high || img.high < 0) {
    res.send('Image`s high must assigned and be Postive ↕️');
    return;
  }
  if (await File.thumbFileExist()) {
    //Thumb file exists
  } else {
    File.createThumb();
  }
  // check if image exists in assets/images/full
  if (await File.imageExistInFull(img.name)) {
    // resize image
    if (await imgClass.imageProcess(img)) {
      res.sendFile(
        path.join(
          File.thumbPath,
          img.name + '-' + img.width + 'X' + img.high + '.jpg'
        )
      );
    } else {
      res.send('Some thing went Wrong can`t resize Image! ❌');
    }
  } else {
    const result = await File.allImages();
    if (result != null) {
      res.send(
        'Image`s Name Not Exsist in images File! ❌ vailable images are: <br>✔️' +
          result.join('<br>✔️')
      );
    } else {
      res.send(
        'Image`s Name Not Exsist in images File! ❌ <br> NO images available❌'
      );
    }
  }
};

imageApi.get('/', resize);
export default imageApi;
