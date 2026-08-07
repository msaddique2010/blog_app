import Counter from "../components/Counter";

export default function Home() {
    return (
        <div className="page-container">
            <h1 className="page-title">Home</h1>
            <p>Welcome to DevBlog! Manage your posts and view your counter statistics below.</p>
            <Counter />
        </div>
    )
}
