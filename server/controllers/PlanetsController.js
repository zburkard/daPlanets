import { coloniesService } from "../services/ColoniesService.js";
import { planetsService } from "../services/PlanetsService.js";
import BaseController from "../utils/BaseController.js";

export class PlanetsController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .get('', this.getAll)
      .post('', this.createColony)
  }

  async getAll(req, res, next) {
    try {
      const planets = await planetsService.getAll()
      return res.send(planets)
    } catch (error) {
      next(error)
    }
  }
  async createColony(req, res, next) {
    try {
      req.body.planetId = req.params.id
      const colony = await coloniesService.create(req.body)
      return res.send(colony)
    } catch (error) {
      next(error)
    }
  }
}