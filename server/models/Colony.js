import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId
export const ColonySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  population: {
    type: Number,
    required: true,
    default: 0
  },
  planetId: {
    type: ObjectId,
    required: true,
    ref: 'Planet',
  }
}, { timestamps: true, toJSON: { virtuals: true } }
)