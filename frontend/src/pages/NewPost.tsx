import { useState, useRef } from "react";
import axios from "axios";

export default function NewPost() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [tag, setTag] = useState("");
    const [summary, setSummary] = useState("");
    const [body, setBody] = useState("");

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
        <div className="page-container">
            <h1 className="page-title">Create New Post</h1>

            <form onSubmit={handleSubmit}>
                <input ref={titleRef} type="text" name="title" id="title" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
                <input ref={authorRef} type="text" name="author" id="author" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} />
                <input ref={tagRef} type="text" name="tag" id="tag" placeholder="Tag" onChange={(e) => setTag(e.target.value)} />
                <input ref={summaryRef} type="text" name="summary" id="summary" placeholder="Summary" onChange={(e) => setSummary(e.target.value)} />
                <input ref={bodyRef} type="text" name="body" id="body" placeholder="Body" onChange={(e) => setBody(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}