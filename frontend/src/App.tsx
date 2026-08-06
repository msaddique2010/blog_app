import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import PostDetails from "./pages/PostDetails";
import NewPost from "./pages/NewPost";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import NavBar from "./components/Navbar";

function App() {

    return (
        <>
            <NavBar />

            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/posts" element={<Posts />}/>
                <Route path="/posts/:id" element={<PostDetails />}/>
                <Route path="/new" element={<NewPost />}/>
                <Route path="/about" element={<About />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </>
    )
}

export default App
