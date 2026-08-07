import { useState } from "react";
import axios from "axios";

export default function NewPost() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [tag, setTag] = useState("");
    const [summary, setSummary] = useState("");
    const [body, setBody] = useState("");

    const [statusMessage, setStatusMessage] = useState(null);

    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault();
        
        try {
            await axios.post("http://localhost:3000/api/posts/", {
                title,
                author,
                tag,
                summary,
                body,
            });
            
            setStatusMessage({ type: "success", text: "Post saved successfully!" });
            
            setTitle("");
            setAuthor("");
            setTag("");
            setSummary("");
            setBody("");
        } catch (error) {
            console.error(error);
            setStatusMessage({ type: "error", text: "Failed to save the post. Please check the fields and try again." });
        }
    };

    return (
        <div className="page-container">
            <h1 className="page-title">Create New Post</h1>

            {statusMessage && (
                <div className={statusMessage.type === "success" ? "status-message" : "error-message"}>
                    {statusMessage.text}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <input type="text" name="title" id="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <input type="text" name="author" id="author" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                <input type="text" name="tag" id="tag" placeholder="Tag" value={tag} onChange={(e) => setTag(e.target.value)} />
                <input type="text" name="summary" id="summary" placeholder="Summary" value={summary} onChange={(e) => setSummary(e.target.value)} />
                <textarea name="body" id="body" placeholder="Body" rows={6}value={body} onChange={(e) => setBody(e.target.value)} required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}