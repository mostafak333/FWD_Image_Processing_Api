import express from 'express';
import routes from './routesDir/mainApi';

const app: express.Application = express();
const port: number = 3000;

app.use(routes);

app.listen(port, async (): Promise<void> => {
  console.log(`Server started at localhost:${port}`);
});

export default app;
