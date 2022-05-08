import { Request, Response } from 'express';
import logger from '../utils/logger';

export async function getAllCustomersHandler(req: Request, res: Response) {
  try {
    res.sendStatus(200);
  } catch (e: any) {
    logger.error(e);
  }
}
