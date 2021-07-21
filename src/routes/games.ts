import { Router } from "express";

import * as controller from '../controllers/games'

const gamesRouter = Router()

gamesRouter.get('/api', controller.getGames)

export default gamesRouter