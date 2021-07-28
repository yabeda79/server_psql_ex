import { Router, Request, Response, NextFunction } from "express";
import Games from '../../models/game'
import { Op } from "sequelize";

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
        const { Allgenres, Shooter, Platformer, RPG, MMORPG } = req.body

        if (Allgenres) {
            const games = await Games.findAll()

            res.status(200).json(games)
        }

        const games = await Games.findAll({ where:{
            [Op.or]:[
                {genre: Shooter ? 'Shooter': null},
                {genre: Platformer ? 'Platformer': null},
                {genre: RPG ? 'RPG': null},
                {genre: MMORPG ? 'MMORPG': null},
            ]}})

        res.status(200).json(games)

    } catch (e) {
        console.log(e)
        res.status(500).json( { message: 'Something (Genre) went wrong, try again later' } );
    }
})
// api/getFilteredByAge
gamesRouter.post('/getFilteredByAge', async(req:Request, res:Response)=>{
    try {
        console.log(req.body)
        const { Allages, three, six, twelve, eighteen} = req.body

        if (Allages) {
            const games = await Games.findAll()

            res.status(200).json(games)
        }

        const games = await Games.findAll({ where:{
            [Op.or]:[
                {age: three ? 3: null},
                {age: six ? 6: null},
                {age: twelve ? 12: null},
                {age: eighteen ? 18: null},
            ]}})

        res.status(200).json(games)

    } catch (e) {
        console.log(e)
        res.status(500).json( { message: 'Something (Age) went wrong, try again later' } );
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