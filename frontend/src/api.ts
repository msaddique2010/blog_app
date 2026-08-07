import axios from "axios";
import type {NewPostType} from  "./Types";

export const getPosts = async() => {
    const response = await axios.get("http://localhost:3000/api/posts")
    return response.data;
}

export const getSinglePost = async(id: string) => {
    const response = await axios.get(`http://localhost:3000/api/posts/${id}`);
    return response.data;
}

export const createNewPost= async(post: NewPostType) => {
    const response = await axios.post("http://localhost:3000/api/posts", post);
    return response.data;
}   