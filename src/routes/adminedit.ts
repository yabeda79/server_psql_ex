import { Router, Request, Response } from "express";
import Games from "../../models/game";

const adminEditRouter = Router();

// /api/admin/getGameById
adminEditRouter.post(
    "/getGameById",
    async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.body;

            const result = await Games.findOne({ where: { id: id } });

            res.status(200).json(result);
        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: "Something went wrong, try again later",
            });
        }
    },
);

// /api/admin/updateGameInfo
adminEditRouter.post(
    "/updateGameInfo",
    async (req: Request, res: Response): Promise<void> => {
        try {
            const {
                id,
                title,
                genre,
                price,
                image,
                PC,
                PS,
                Xbox,
                description,
            } = req.body;

            await Games.update(
                {
                    title: title,
                    genre: genre,
                    price: price,
                    image: image,
                    PC: PC,
                    PS: PS,
                    Xbox: Xbox,
                    description: description,
                },
                {
                    where: {
                        id: id,
                    },
                },
            );

            const result = await Games.findOne({ where: { id: id } });

            res.status(200).json(result);
        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: "Something went wrong, try again later",
            });
        }
    },
);

// /api/admin/deleteById/:id
adminEditRouter.delete(
    "/deleteById/:id",
    async (req: Request, res: Response): Promise<void> => {
        try {
            const {
                id,
                title,
                genre,
                age,
                price,
                image,
                PC,
                PS,
                Xbox,
                description,
            } = req.body;

            const result = await Games.destroy({ where: { id: id } });

            res.status(200).json(result);
        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: "Something went wrong, try again later",
            });
        }
    },
);

// /api/admin/createGame
adminEditRouter.post(
    "/createGame",
    async (req: Request, res: Response): Promise<void> => {
        try {
            const {
                id,
                title,
                genre,
                age,
                price,
                image,
                PC,
                PS,
                Xbox,
                description,
            } = req.body;

            const game = await Games.findOne({ where: { title: title } });

            if (game) {
                res.status(400).json({
                    message: "Current game already exists",
                });
            }

            await Games.create({
                title: title,
                genre: genre,
                age: age,
                price: price,
                image: image,
                PC: PC,
                PS: PS,
                Xbox: Xbox,
                description: description,
                createdAt: new Date(),
                updatedAt: new Date(),
            });

            const result = await Games.findAll({ where: { title: title } });

            res.status(200).json(result);
        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: "Something went wrong, try again later",
            });
        }
    },
);

export default adminEditRouter;
