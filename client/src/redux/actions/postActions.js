import { FETCH_POST, ADD_POST, REMOVE_POST } from './types';

export const fetchPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }));
}