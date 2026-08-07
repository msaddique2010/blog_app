import { useEffect, useState } from "react";
import axios from "axios";
import type { PostType } from "../Types";
import PostCard from "../components/PostCard";

export default function Posts() {

    const [posts, setPosts] = useState<PostType[]>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState();
    const [refresh, setRefresh] = useState<number>(0);

    useEffect(() => {
        const fetchPosts = async() => {
            await axios.get("http://localhost:3000/api/posts/")
            .then(res => setPosts(res.data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false))
        }
        fetchPosts();
    },[refresh]);
    
    if (loading) return <div className="status-message">Loading...</div>;
    if (error) return <div className="status-message error-message">{String(error)}</div>;
    if (!posts) return <div className="status-message">Posts not found.</div>;

    return (
        <div className="page-container">
            <h1 className="page-title">Posts</h1>
            <button style={{ marginBottom: '1.5rem' }} onClick={() => setRefresh(refresh + 1)}>Refresh</button>

            <div className="posts-grid">
                {posts.map((post) => <PostCard key={post._id} post={post} />)}
            </div>
        </div>
    )
}
