import { useState, useRef } from "react";
import type { PostType, NewPostType } from "../Types";
import axios from "axios";

export default function NewPost() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [tag, setTag] = useState("");
    const [summary, setSummary] = useState("");
    const [body, setBody] = useState("");

    const [post] = useState<NewPostType>();
    const titleRef = useRef(null);
    const authorRef = useRef(null);
    const tagRef = useRef(null);
    const summaryRef = useRef(null);
    const bodyRef = useRef(null);

    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault();
        const post = {
            title: title,
            author: author,
            tag: tag,
            summary: summary,
            body: body,            
        }
        
        console.log(post); 
        await axios.post("http://localhost:3000/api/posts/",
            {
                title: title,
                author: author,
                tag: tag,
                summary: summary,
                body: body,
            });
        
        if(titleRef.current) titleRef.current.value = "";
        if(authorRef.current) authorRef.current.value = "";
        if(tagRef.current) tagRef.current.value = "";
        if(summaryRef.current) summaryRef.current.value = "";
        if(bodyRef.current) bodyRef.current.value = "";
    };

    return (
        <div>
            <p>Form</p>

            <form onSubmit={handleSubmit}>
                <input ref={titleRef} className="border px-2 py-1" type="text" name="title" id="title" placeholder="Title" onChange={(e) => setTitle(e.target.value)} /> <br />
                <input ref={authorRef} className="border px-2 py-1" type="text" name="author" id="author" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} /> <br />
                <input ref={tagRef} className="border px-2 py-1" type="text" name="tag" id="tag" placeholder="Tag" onChange={(e) => setTag(e.target.value)} /> <br />
                <input ref={summaryRef} className="border px-2 py-1" type="text" name="summary" id="summary" placeholder="Summary" onChange={(e) => setSummary(e.target.value)} /> <br />
                <input ref={bodyRef} className="border px-2 py-1" type="text" name="body" id="body" placeholder="Body" onChange={(e) => setBody(e.target.value)} /> <br />
                <button type="submit" className="border">Submit</button>
            </form>
        </div>
    );
}