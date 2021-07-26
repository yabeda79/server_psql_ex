import { Request, Response, NextFunction } from "express";

import Games from '../../models/game'

export const getGames = async (req: Request, res: Response, next:NextFunction): Promise<void> => {
    const result = await Games.findAll()
    console.log(result)
    res.status(200).json(result)

    // Games.findAll().then(games=>{console.log(games)}).catch(err=>console.log(err))
    
};

