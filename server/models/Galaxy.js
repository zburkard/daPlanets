import { Schema } from "mongoose";

export const GalaxySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  stars: {
    type: Number,
    required: true,
    default: 0
  }
}, { timestamps: true, toJSON: { virtuals: true } }
)

GalaxySchema.virtual('planetCount', {
  localField: '_id',
  ref: 'Planet',
  foreignField: 'galaxyId',
  count: true
})