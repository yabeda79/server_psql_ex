import { Router, Request, Response, NextFunction } from "express";
import Games from "../../models/game";
import { Op } from "sequelize";

const gamesRouter = Router();
// api/getAll
gamesRouter.get(
    "/getAll",
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const result = await Games.findAll();

            res.status(200).json(result);
        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: "Something went wrong, try again later",
            });
        }
    },
);
// -------------------------------------

// -------------------------------------
// /api/getFilteredAll
gamesRouter.post("/getFilteredAll", async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        const { Allages, three, six, twelve, eighteen } = req.body;
        const { Allgenres, Shooter, Platformer, RPG, MMORPG } = req.body;

        if (Allgenres && Allages) {
            const games = await Games.findAll();

            res.status(200).json(games);
        }

        if (Allgenres && !Allages) {
            const games = await Games.findAll({
                where: {
                    [Op.or]: [
                        { age: three ? 3 : null },
                        { age: six ? 6 : null },
                        { age: twelve ? 12 : null },
                        { age: eighteen ? 18 : null },
                    ],
                },
            });

            res.status(200).json(games);
        }

        if (!Allgenres && Allages) {
            const games = await Games.findAll({
                where: {
                    [Op.or]: [
                        { genre: Shooter ? "Shooter" : null },
                        { genre: Platformer ? "Platformer" : null },
                        { genre: RPG ? "RPG" : null },
                        { genre: MMORPG ? "MMORPG" : null },
                    ],
                },
            });

            res.status(200).json(games);
        }

        const games = await Games.findAll({
            where: {
                [Op.or]: [
                    { genre: Shooter ? "Shooter" : null },
                    { genre: Platformer ? "Platformer" : null },
                    { genre: RPG ? "RPG" : null },
                    { genre: MMORPG ? "MMORPG" : null },
                ],
                [Op.and]: {
                    [Op.or]: [
                        { age: three ? 3 : null },
                        { age: six ? 6 : null },
                        { age: twelve ? 12 : null },
                        { age: eighteen ? 18 : null },
                    ],
                },
            },
        });

        res.status(200).json(games);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Something (Age) went wrong, try again later",
        });
    }
});

// /api/getFilteredPC
gamesRouter.post("/getFilteredPC", async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        const { Allages, three, six, twelve, eighteen } = req.body;
        const { Allgenres, Shooter, Platformer, RPG, MMORPG } = req.body;

        if (Allgenres && Allages) {
            const games = await Games.findAll({ where: { PC: true } });

            res.status(200).json(games);
        }

        if (Allgenres && !Allages) {
            const games = await Games.findAll({
                where: {
                    [Op.or]: [
                        { age: three ? 3 : null },
                        { age: six ? 6 : null },
                        { age: twelve ? 12 : null },
                        { age: eighteen ? 18 : null },
                    ],
                    [Op.and]: { PC: true },
                },
            });

            res.status(200).json(games);
        }

        if (!Allgenres && Allages) {
            const games = await Games.findAll({
                where: {
                    [Op.or]: [
                        { genre: Shooter ? "Shooter" : null },
                        { genre: Platformer ? "Platformer" : null },
                        { genre: RPG ? "RPG" : null },
                        { genre: MMORPG ? "MMORPG" : null },
                    ],
                    [Op.and]: { PC: true },
                },
            });

            res.status(200).json(games);
        }

        const games = await Games.findAll({
            where: {
                [Op.or]: [
                    { genre: Shooter ? "Shooter" : null },
                    { genre: Platformer ? "Platformer" : null },
                    { genre: RPG ? "RPG" : null },
                    { genre: MMORPG ? "MMORPG" : null },
                ],
                [Op.and]: [
                    {
                        [Op.or]: [
                            { age: three ? 3 : null },
                            { age: six ? 6 : null },
                            { age: twelve ? 12 : null },
                            { age: eighteen ? 18 : null },
                        ],
                    },
                    { PC: true },
                ],
            },
        });

        res.status(200).json(games);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Something (Age) went wrong, try again later",
        });
    }
});

// /api/getFilteredPS
gamesRouter.post("/getFilteredPS", async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        const { Allages, three, six, twelve, eighteen } = req.body;
        const { Allgenres, Shooter, Platformer, RPG, MMORPG } = req.body;

        if (Allgenres && Allages) {
            const games = await Games.findAll({ where: { PS: true } });

            res.status(200).json(games);
        }

        if (Allgenres && !Allages) {
            const games = await Games.findAll({
                where: {
                    [Op.or]: [
                        { age: three ? 3 : null },
                        { age: six ? 6 : null },
                        { age: twelve ? 12 : null },
                        { age: eighteen ? 18 : null },
                    ],
                    [Op.and]: { PS: true },
                },
            });

            res.status(200).json(games);
        }

        if (!Allgenres && Allages) {
            const games = await Games.findAll({
                where: {
                    [Op.or]: [
                        { genre: Shooter ? "Shooter" : null },
                        { genre: Platformer ? "Platformer" : null },
                        { genre: RPG ? "RPG" : null },
                        { genre: MMORPG ? "MMORPG" : null },
                    ],
                    [Op.and]: { PS: true },
                },
            });

            res.status(200).json(games);
        }

        const games = await Games.findAll({
            where: {
                [Op.or]: [
                    { genre: Shooter ? "Shooter" : null },
                    { genre: Platformer ? "Platformer" : null },
                    { genre: RPG ? "RPG" : null },
                    { genre: MMORPG ? "MMORPG" : null },
                ],
                [Op.and]: [
                    {
                        [Op.or]: [
                            { age: three ? 3 : null },
                            { age: six ? 6 : null },
                            { age: twelve ? 12 : null },
                            { age: eighteen ? 18 : null },
                        ],
                    },
                    { PS: true },
                ],
            },
        });

        res.status(200).json(games);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Something (Age) went wrong, try again later",
        });
    }
});

// /api/getFilteredXbox
gamesRouter.post("/getFilteredXbox", async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        const { Allages, three, six, twelve, eighteen } = req.body;
        const { Allgenres, Shooter, Platformer, RPG, MMORPG } = req.body;

        if (Allgenres && Allages) {
            const games = await Games.findAll({ where: { Xbox: true } });

            res.status(200).json(games);
        }

        if (Allgenres && !Allages) {
            const games = await Games.findAll({
                where: {
                    [Op.or]: [
                        { age: three ? 3 : null },
                        { age: six ? 6 : null },
                        { age: twelve ? 12 : null },
                        { age: eighteen ? 18 : null },
                    ],
                    [Op.and]: { Xbox: true },
                },
            });

            res.status(200).json(games);
        }

        if (!Allgenres && Allages) {
            const games = await Games.findAll({
                where: {
                    [Op.or]: [
                        { genre: Shooter ? "Shooter" : null },
                        { genre: Platformer ? "Platformer" : null },
                        { genre: RPG ? "RPG" : null },
                        { genre: MMORPG ? "MMORPG" : null },
                    ],
                    [Op.and]: { Xbox: true },
                },
            });

            res.status(200).json(games);
        }

        const games = await Games.findAll({
            where: {
                [Op.or]: [
                    { genre: Shooter ? "Shooter" : null },
                    { genre: Platformer ? "Platformer" : null },
                    { genre: RPG ? "RPG" : null },
                    { genre: MMORPG ? "MMORPG" : null },
                ],
                [Op.and]: [
                    {
                        [Op.or]: [
                            { age: three ? 3 : null },
                            { age: six ? 6 : null },
                            { age: twelve ? 12 : null },
                            { age: eighteen ? 18 : null },
                        ],
                    },
                    { Xbox: true },
                ],
                // [Op.and]:{Xbox: true}
            },
        });

        res.status(200).json(games);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Something (Age) went wrong, try again later",
        });
    }
});

export default gamesRouter;
