import { FETCH_POSTS, ADD_POST, REMOVE_POST } from '../actions/types';


const initialState = {
   items: [],
   item: {}
}

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
        return {
            ...state,
            items: action.payload
        }
        case ADD_POST:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.postName]: state.posts[action.postName]+"hello"
                }
            }
        case REMOVE_POST:
        return {
            ...state,
            posts: {
                ...state.posts,
                [action.postName]: state.posts[action.postName]-1
            }
        };
            default:
                return state;
    }
};

// export default reducer;