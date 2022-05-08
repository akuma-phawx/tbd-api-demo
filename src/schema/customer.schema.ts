import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const customerSchema = new Schema({
  name: String,
  username: String,
  email: String,
  address: String,
  birthdate: Date,
  active: Boolean,
  accounts: Array,
});

export default customerSchema;
