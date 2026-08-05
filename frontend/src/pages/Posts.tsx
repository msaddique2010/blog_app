import { useEffect, useState } from "react"
import axios from "axios";

export default function Posts() {
    const [posts, setPosts] = useState();
    const [loading, setLoading] = useState<boolean>();
    const [error, setError] = useState<Error>();
    const [refresh, setRefresh] = useState();

    useEffect(() => {
        const fetchPosts = async() => {
            await axios.get("http://localhost:3000/api/posts/")
            .then(res => setPosts(res.data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false)) // runs either way
        }
        fetchPosts();
    },[]);

    return (
        <div>Posts</div>
        
    )
}
