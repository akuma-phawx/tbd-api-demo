import express from 'express';
import connect from './utils/connect';
import logger from './utils/logger';

require('dotenv').config();

const app = express();
const PORT: number = parseInt(process.env.SERVER_PORT);

app.listen(PORT, async () => {
  logger.info(`Server Up: http://${process.env.SERVER_URI}:${PORT}`);
  await connect();
});
