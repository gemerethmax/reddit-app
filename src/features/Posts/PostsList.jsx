import { useSelector, useDispatch } from "react-redux";
import { addPost, removePost } from "./postsSlice";
import { selectAllPosts, selectPostStatus, selectPostError } from "./postsSlice";

export const PostsList = () => { 

    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector(selectPostStatus);
    const postError = useSelector(selectPostError);

   
    const content = posts.map((post) => (
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <img src={post.img} alt={post.title} />
            <p>Author: {post.author}</p>
            <button onClick={() => dispatch(removePost({ id: post.id }))}>Remove</button>
        </div>
    ));

    return (


        <div>
            <h2>Posts List</h2>
            {content}
        </div>
    );
}
