import { Link } from  "react-router-dom";
import type { PostType } from "../Types";

export default function PostCard({ post }: {post: PostType}) {
    const {title, author, tag, summary, date, _id} = post;
    return (
        <div className="post-card">
            <span className="post-tag">{tag}</span>
            <h2 className="post-title">{title}</h2>
            <div className="post-meta">
                <span>By {author}</span> · <span>{date}</span>
            </div>
            <p className="post-summary">{summary}</p>
            <Link to={`/posts/${_id}`} className="btn more-btn">Read More</Link>
        </div>
    )
}



// posts.map(({title, author, tag, summary, date, _id}) => {
//                     return(
//                         <div key={_id} className="border">
//                             <p>{tag}</p>
//                             <h2 className="text-xl font-bold">{title}</h2>
//                             <div className="text-sm flex gap-2">
//                                 <p>{author}</p> · <p>{date}</p>
//                             </div>
//                             <p>{summary}</p>
//                                 <Link to={`/post/${_id}`} className="more-btn border cursor-pointer">Read More</Link>
//                             <br /><br />
//                         </div>
//                     );
//                 });