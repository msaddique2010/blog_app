import { useEffect, useState } from "react";
import type { PostType, NewPostType } from "../Types";

export default function NewPost() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [tag, setTag] = useState("");
    const [summary, setSummary] = useState("");
    const [body, setBody] = useState("");

    const [post, setPost] = useState<NewPostType>();


    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();


        console.log(post);
    };

    return (
        <div>
            <p>Form</p>

            <form onSubmit={handleSubmit}>
                <input className="border px-2 py-1" type="text" name="title" id="title" placeholder="Title" onChange={(e) => setTitle(e.target.value)} /> <br />
                <input className="border px-2 py-1" type="text" name="author" id="author" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} /> <br />
                <input className="border px-2 py-1" type="text" name="tag" id="tag" placeholder="Tag" onChange={(e) => setTag(e.target.value)} /> <br />
                <input className="border px-2 py-1" type="text" name="summary" id="summary" placeholder="Summary" onChange={(e) => setSummary(e.target.value)} /> <br />
                <input className="border px-2 py-1" type="text" name="body" id="body" placeholder="Body" onChange={(e) => setBody(e.target.value)} /> <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}