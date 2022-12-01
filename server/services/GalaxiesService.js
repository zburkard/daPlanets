import { dbContext } from "../db/DbContext.js"

class GalaxiesService {

  async getAll() {
    const galaxies = await dbContext.Galaxies.find().populate('planetCount')
    return galaxies
  }

  async create(galaxyData) {
    const newGalaxy = await dbContext.Galaxies.create(galaxyData)
    return newGalaxy
  }
}

export const galaxiesService = new GalaxiesService()