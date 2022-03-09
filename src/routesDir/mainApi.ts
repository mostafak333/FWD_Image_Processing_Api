import express from 'express';
import imageApi from './myAPI/imageApi';
const routes: express.Router = express.Router();

routes.use('/image/resize', imageApi);
routes.get('/', (_req: express.Request, res: express.Response) => {
  res.send(
    'Welcome to "Image-processing-api" for resizeing images pass url like this to get perfect result 👌: href="/api/images?filename=fjord&width=100&height=100'
  );
});
export default routes;
