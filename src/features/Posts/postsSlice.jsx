import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    posts: [{id: 1, title: 'First Post', content: 'This is the first post', img: 'https://via.placeholder.com/150', author: 'John Doe'},
            {id: 2, title: 'Second Post', content: 'This is the second post', img: 'https://via.placeholder.com/150', author: 'Jane Doe'},
            {id: 3, title: 'Third Post', content: 'This is the third post', img: 'https://via.placeholder.com/150', author: 'Max Gemereth'},
    ],
    status: 'idle', // idle | loading | succeeded | failed
    error: null,
}

const postsSlice = createSlice({ 
    name: 'posts',
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload);
        },
        removePost: (state, action) => {
            state.posts = state.posts.filter(post => post.id !== action.payload.id);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase('posts/fetchPosts/pending', (state) => {
                state.status = 'loading';
            })
            .addCase('posts/fetchPosts/fulfilled', (state, action) => {
                state.status = 'succeeded';
                state.posts = action.payload;
            })
            .addCase('posts/fetchPosts/rejected', (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
})

export const { addPost, removePost } = postsSlice.actions;
export const selectAllPosts = (state) => state.posts.posts;
export const selectPostById = (state, postId) => 
    state.posts.posts.find(post => post.id === postId);
export const selectPostStatus = (state) => state.posts.status;
export const selectPostError = (state) => state.posts.error;
export default postsSlice.reducer;