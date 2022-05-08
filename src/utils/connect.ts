import mongoose from 'mongoose';
import logger from './logger';
require('dotenv').config();

async function connect() {
  const DB_URI: string = process.env.DB_URI || '';

  try {
    await mongoose.connect(DB_URI);
    logger.info(
      `Database Connection Successfull. Connected to ${process.env.DB_NAME}`
    );
  } catch (error) {
    logger.error('Failed Connection to Database.');
    process.exit(1);
  }
}

export default connect;
