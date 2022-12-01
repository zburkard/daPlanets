import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId

export const PlanetSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  biome: {
    type: String,
    required: true,
  },
  atmosphere: {
    type: Boolean,
    default: false,
    ref: 'Galaxy',
    required: true
  },
  galaxyId: {
    type: ObjectId,
    required: true,
    ref: 'Galaxy'
  }
},
  { timestamps: true, toJSON: { virtuals: true } }
)

PlanetSchema.virtual('galaxy', {
  localField: 'galaxyId',
  ref: 'Galaxy',
  foreignField: '_id',
  justOne: true
})