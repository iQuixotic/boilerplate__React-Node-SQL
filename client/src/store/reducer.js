import * as actionTypes from './actions';

const initialState = {
    message: 'The eternal message',
    numberOfSecrets: 4,
    posts: {
        salad: 'I looove salad',
        vegans: 'vegans are little fuckboys',
        cheese: 'The goats make it, bruh',
        meat: 'It wat for dinner'
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_POST:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    [action.postName]: state.posts[action.postName]+"hello"
                }
            }
        case actionTypes.REMOVE_POST:
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

export default reducer;