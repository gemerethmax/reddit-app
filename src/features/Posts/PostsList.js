import { useSelector, useDispatch } from "react-redux";
import { addPost, removePost } from "./postsSlice";
import { selectAllPosts, selectPostStatus, selectPostError } from "./postsSlice";

export const PostsList = () => { 

    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector(selectPostStatus);
    const postError = useSelector(selectPostError);
    
    return (
        <div>
            <h2>Posts List</h2>
            {/* Add your posts list rendering logic here */}
        </div>
    );
}
