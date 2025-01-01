import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    fastName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    presentAddress: {
      type: String,
      require: true,
    },
    permanentAddress: {
      type: String,
      require: true,
    }
  },
  { timestamps: true }
);

export const Users= mongoose.model('Users', userSchema);