import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div>
                <Link to="/">Home</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/new">New Post</Link>
                <Link to="/about">About</Link>
            </div>
        </>
    )
}
