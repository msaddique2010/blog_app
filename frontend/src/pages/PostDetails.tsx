import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import type { PostType } from "../Types";


export default function PostDetails() {
    const navigate = useNavigate();
    
    const { id } = useParams();
    const [post, setPost] = useState<PostType>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState();

    useEffect(() => {
        const getPostDetails = async() => {
            await axios.get(`http://localhost:3000/api/posts/${id}`)
            .then(res => setPost(res.data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false))
        }

        getPostDetails();
    },[id]);

    if (loading) return <div className="status-message">Loading...</div>;
    if (error) return <div className="status-message error-message">{String(error)}</div>;
    if (!post) return <div className="status-message">Post not found.</div>;

    return(
        <div className="page-container">
            <h1 className="page-title">{post.title}</h1>
            <div className="post-meta">
                <span>By {post.author}</span> · <span>{post.date}</span> · <span className="post-tag">{post.tag}</span>
            </div>
            <p style={{ margin: '1.5rem 0', color: 'var(--text-primary)', whiteSpace: 'pre-wrap' }}>{post.body}</p>
            <button className="btn" onClick={() => navigate(-1)}>Back</button>
        </div>
    );
}
