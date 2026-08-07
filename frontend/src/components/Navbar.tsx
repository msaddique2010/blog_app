import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">DevBlog</Link>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/new">New Post</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    )
}
