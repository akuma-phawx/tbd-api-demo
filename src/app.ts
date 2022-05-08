import express from 'express';
import connect from './utils/connect';
import logger from './utils/logger';
import routes from './routes';

require('dotenv').config();

const app = express();
const PORT: number = parseInt(process.env.PORT!) || 8080;

app.use(express.json());

app.listen(PORT, async () => {
  logger.info(`Server Up: http://${process.env.SERVER_URI}:${PORT}`);

  await connect();

  routes(app);
});
