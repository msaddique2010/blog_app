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

    if (loading) return <p>loading...</p>;
    if (error) return <p>{error}</p>;
    if (!post) return <p>Post not found.</p>;

    return(
        <div>
            {post.title}
            <br />
            <button className="border cursor-pointer" onClick={() => navigate(-1)}>Back</button>
        </div>
    );
}
