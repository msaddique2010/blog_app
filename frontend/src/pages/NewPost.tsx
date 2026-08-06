import { useState } from "react";
import type {PostType} from "../Types";

export default function NewPost() {
    // const [post, setPost] = useState<PostType>();

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [tag, setTag] = useState("");
    const [summary, setSummary] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = () => {
    
    }
    return (
        <div>
            <p>Form</p>

            <form onSubmit={handleSubmit}>
                <input className="border px-2 py-1" type="text" name="title" id="title" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
                <input className="border px-2 py-1" type="text" name="author" id="author" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} />
                <input className="border px-2 py-1" type="text" name="tag" id="tag" placeholder="Tag" onChange={(e) => setTag(e.target.value)} />
                <input className="border px-2 py-1" type="text" name="summary" id="summary" placeholder="Summary" onChange={(e) => setSummary(e.target.value)} />
                <input className="border px-2 py-1" type="text" name="body" id="body" placeholder="Body" onChange={(e) => setBody(e.target.value)} />
            </form>
        </div>
    );
}
