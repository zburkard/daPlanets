import { dbContext } from "../db/DbContext.js"

const populateFields = 'name'
class PlanetsService {

  async getAll() {
    const planets = await dbContext.Planets.find()
    return planets
  }

  async getPlanetsInGalaxy(galaxyId) {
    const planets = await dbContext.Planets.find({ galaxyId }).populate('galaxy', 'name stars')
    return planets
  }

  async createPlanet(planetData) {
    const newPlanet = await dbContext.Planets.create(planetData)
    await newPlanet.populate('galaxy', populateFields)
    return newPlanet
  }

}

export const planetsService = new PlanetsService()