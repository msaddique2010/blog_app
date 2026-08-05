import mongoose from "mongoose";
import { connectDB } from "./db.js";
import "dotenv/config";
import { Post } from "./models/Post.js";

type Post = {
  id: number;
  title: string;
  author: string;
  tag: string;
  summary: string;
  body: string;
  date: Date;
};

const posts: Post[] = [
  {
    id: 1,
    title: "Getting Started with React",
    author: "Ayesha Khan",
    tag: "React",
    summary: "Components, props and state in the simplest way possible.",
    body: `React lets you build a page out of small pieces called components.
    A component is just a function that returns JSX. Data that comes from the parent is called props,
    and data the component owns itself is called state.`,
    date: new Date("2026-02-10"),
  },
  {
    id: 2,
    title: "Why useEffect Exists",
    author: "Bilal Ahmed",
    tag: "Hooks",
    summary: "Side effects, the dependency array and the infinite loop trap.",
    body: `Code written directly in the component body runs on every single render,
    so an API call there fires again and again. useEffect moves that code out of the render
    and the dependency array decides when it runs.`,
    date: new Date("2026-02-12"),
  },
  {
    id: 3,
    title: "axios vs fetch",
    author: "Hina Malik",
    tag: "API",
    summary: "One step instead of two, and errors that actually throw.",
    body: `fetch needs two steps: await the response, then await res.json().
    axios gives you res.data straight away, treats a 404 or 500 as an error so catch runs,
    and lets you set a base URL once.`,
    date: new Date("2026-02-14"),
  },
  {
    id: 4,
    title: "Routing with React Router",
    author: "Usman Tariq",
    tag: "Router",
    summary: "BrowserRouter, Routes, Route, Link and useParams in one place.",
    body: `BrowserRouter wraps the whole app. Routes holds all your Route pairs
    and each Route matches a path to a page. A path like /posts/:id is a placeholder,
    and useParams reads that id inside the page.`,
    date: new Date("2026-02-16"),
  },
  {
    id: 5,
    title: "Pushing Your Project to GitHub",
    author: "Sana Yousaf",
    tag: "Git",
    summary: "git init, add, commit, branch, remote, push - in that order.",
    body: `Create the .gitignore first so node_modules never goes up.
    Then git init, git add ., git commit, git branch -M main,
    git remote add origin, and git push -u origin main.`,
    date: new Date("2026-02-18"),
  },
  {
    id: 6,
    title: "Mongoose Models and Schemas",
    author: "Zainab Raza",
    tag: "MongoDB",
    summary: "A schema is the shape, a model is the tool you work with.",
    body: `A schema lists the fields of a document and their types,
    plus rules like required or default. mongoose.model turns that schema
    into a model, and the model gives you find, findById, create,
    and findByIdAndDelete.`,
    date: new Date("2026-02-20"),
  },
];


async function seedingPosts() {
    try{
        await connectDB();
        await Post.deleteMany();
        const insertedPosts = await Post.insertMany(posts);
        console.log(`${insertedPosts.length} posts added successfully.`);
    }
    catch(error){
        console.error("Error seeding database:", error);
    }
    finally {
        await mongoose.connection.close();
        console.log("Database connection closed.");
    }
};

seedingPosts();