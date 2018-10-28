import { FETCH_POSTS,
        //  ADD_POST,
        //  REMOVE_POST 
} from './types';

export const fetchPosts = () => dispatch => {
        console.log('loddddd')
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }));
}