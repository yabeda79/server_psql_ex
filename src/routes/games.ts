import { Router, Request, Response, NextFunction } from "express";
import Games from '../../models/game'


const gamesRouter = Router()
// api/getAll
gamesRouter.get('/getAll', async (req: Request, res: Response, next:NextFunction): Promise<void> => {
    try{
        const result = await Games.findAll()
        res.status(200).json(result)
    } catch(e){
        console.log(e)
        res.status(500).json( { message: 'Something went wrong, try again later' } );
    }
})
// api/getFilteredByGenre
gamesRouter.post('/getFilteredByGenre', async(req:Request, res:Response)=>{
    try {
        console.log(req.body)
        const {parameter} = req.body

        const games = await Games.findAll({ where: {genre: parameter}})

        res.status(200).json(games)

    } catch (e) {
        console.log(e)
        res.status(500).json( { message: 'Something went wrong, try again later' } );
    }
})
// api/getFilteredByAge
gamesRouter.post('/getFilteredByAge', async(req:Request, res:Response)=>{
    try {
        console.log(req.body)
        const {parameter} = req.body

        const games = await Games.findAll({ where: {age: parameter}})

        res.status(200).json(games)

    } catch (e) {
        console.log(e)
        res.status(500).json( { message: 'Something went wrong, try again later' } );
    }
})
// api/getFilteredByRating
gamesRouter.post('/getFilteredByRating', async(req:Request, res:Response)=>{
    try {
        console.log(req.body)
        const {parameter} = req.body

        const games = await Games.findAll({ where: {rating: parameter}})

        res.status(200).json(games)

    } catch (e) {
        console.log(e)
        res.status(500).json( { message: 'Something went wrong, try again later' } );
    }
})
// api/getOnPC
gamesRouter.get('/getOnPC', async(req:Request, res:Response)=>{
    try {
        const games = await Games.findAll({ where: {PC: true}})

        res.status(200).json(games)

    } catch (e) {
        console.log(e)
        res.status(500).json( { message: 'Something went wrong, try again later' } );
    }
})
// api/getOnPS
gamesRouter.get('/getOnPS', async(req:Request, res:Response)=>{
    try {
        const games = await Games.findAll({ where: {PS: true}})

        res.status(200).json(games)

    } catch (e) {
        console.log(e)
        res.status(500).json( { message: 'Something went wrong, try again later' } );
    }
})
// api/getOnXbox
gamesRouter.get('/getOnXbox', async(req:Request, res:Response)=>{
    try {
        const games = await Games.findAll({ where: {Xbox: true}})

        res.status(200).json(games)

    } catch (e) {
        console.log(e)
        res.status(500).json( { message: 'Something went wrong, try again later' } );
    }
})

export default gamesRouter