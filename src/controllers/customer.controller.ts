import { Request, Response } from 'express';
import CustomerModel from '../models/customer.model';
import logger from '../utils/logger';

export async function getAllCustomersHandler(req: Request, res: Response) {
  try {
    const filter = {};
    const allCustomers = await CustomerModel.find(filter);

    res.send(allCustomers);
  } catch (e: any) {
    logger.error(e);
  }
}
