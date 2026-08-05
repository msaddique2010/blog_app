import express, { type Express, type Request, type Response } from "express";
import "dotenv/config";
import { connectDB } from "./db.js";
import { Post } from "./models/Post.js";
import cors from "cors";

console.log("Connecting to MongoDB...");
await connectDB();
console.log("MongoDB Connected");

const PORT = process.env.PORT;
const server: Express = express();

server.use(express.json());
server.use(cors());

server.get("/", (req: Request, res: Response) => {
    res.write("Root page");
    res.send();
});

// @dec     GET all posts
// @route   api/posts/
server.get("/api/posts", async(req: Request, res: Response) => {
    try {
        const posts = await Post.find().sort({ date: -1 });
        res.status(200).send(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

// @dec     GET posts by id
// @route   api/posts/:id
server.get("/api/posts/:id", async(req: Request, res: Response) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }   
        res.status(200).json(post);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

// @dec     POST posts
// @route   api/posts/
server.post("/api/posts", async(req: Request, res: Response) => {
    try {
        const posts = await Post.create(req.body);
        res.status(200).send(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

// @dec     DELETE posts by id
// @route   api/posts/:id
server.delete("/api/posts/:id", async(req: Request, res: Response) => {
    try {
        const posts = await Post.findByIdAndDelete(req.params.id);
        if (!posts) {
            return res.status(404).json({ message: "Post not found" });
        }   
        res.status(200).json({ message: "Deleted Successdully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

server.listen(PORT, () => console.log("API running on port " + PORT));