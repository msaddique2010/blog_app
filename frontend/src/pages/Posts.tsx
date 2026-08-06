import { useEffect, useState } from "react";
import axios from "axios";
import type { PostType } from "../Types";
import PostCard from "../components/PostCard";

export default function Posts() {

    const [posts, setPosts] = useState<PostType[]>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState();
    // const [refresh, setRefresh] = useState();

    useEffect(() => {
        const fetchPosts = async() => {
            await axios.get("http://localhost:3000/api/posts/")
            .then(res => setPosts(res.data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false)) // runs either way
        }
        fetchPosts();
    },[]);
    
    if (loading) return <p>loading...</p>;
    if (error) return <p>{error}</p>;
    if (!posts) return <p>Posts not found.</p>;

    return (
        <>
            <div>Posts</div>
            {/* grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                {posts.map((post) => <PostCard key={post._id} post={post} />)}
            </div>
        </>
    )
}
