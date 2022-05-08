import mongoose from 'mongoose';
import customerSchema from '../schema/customer.schema';

const CustomerModel = mongoose.model('customer', customerSchema);

export default CustomerModel;
