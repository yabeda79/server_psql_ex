import { Request, Response, NextFunction } from "express";

import Games from '../../models/game'

export const getGames = async (req: Request, res: Response, next:NextFunction): Promise<void> => {
    try{
        const result = await Games.findAll()
        res.status(200).json(result)
    } catch(e){
        console.log(e)
        res.status(500).json( { message: 'Something went wrong, try again later' } );
    }

    // Games.findAll().then(games=>{console.log(games)}).catch(err=>console.log(err))
    
};

