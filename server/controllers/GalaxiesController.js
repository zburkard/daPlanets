import { galaxiesService } from "../services/GalaxiesService.js";
import { planetsService } from "../services/PlanetsService.js";
import BaseController from "../utils/BaseController.js";

export class GalaxiesController extends BaseController {
  constructor() {
    super('api/galaxies')
    this.router
      .get('', this.getAllGalaxies)
      .get('/:id', this.getPlanetsInGalaxy)
      .post('', this.create)
      .post('/:id/planets', this.createPlanet)
  }

  async getAllGalaxies(req, res, next) {
    try {
      const galaxies = await galaxiesService.getAll()
      return res.send(galaxies)
    } catch (error) {
      next(error)
    }
  }
  async getPlanetsInGalaxy(req, res, next) {
    try {
      const planets = await planetsService.getPlanetsInGalaxy(req.params.id)
      return res.send(planets)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const galaxy = await galaxiesService.create(req.body)
      return res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async createPlanet(req, res, next) {
    try {
      req.body.galaxyId = req.params.id
      const planet = await planetsService.createPlanet(req.body)
      return res.send(planet)
    } catch (error) {
      next(error)
    }
  }
}