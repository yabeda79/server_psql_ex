import { Router, Request, Response } from "express";
import GivingPosts from "../../models/givinPosts";

const postsRouter = Router();

// /api/posts/getAllPosts
postsRouter.get("/getAllPosts", async (req: Request, res: Response) => {
    try {
        const result = await GivingPosts.findAll();

        res.status(200).json(result);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Something went wrong, try again later",
        });
    }
});

// /api/posts/createNewPost
postsRouter.post("/createNewPost", async (req: Request, res: Response) => {
    try {
        const { title, image, description } = req.body;

        await GivingPosts.create({
            title: title,
            image: image,
            description: description,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        res.status(201).json({ message: "Post created" });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Something went wrong, try again later",
        });
    }
});

export default postsRouter;
