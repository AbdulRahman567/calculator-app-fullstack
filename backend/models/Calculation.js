import mongoose from 'mongoose';

const calculationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    expression: {
      type: String,
      required: true,
    },
    result: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Calculation = mongoose.model('Calculation', calculationSchema);
export default Calculation;