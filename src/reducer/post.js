const initialState = {
    post: []
}
  
const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_POST':
            return {
                ...state,
                post: action.payload,
            }
            case 'GET_POST_BY_ID':
            return {
                ...state,
                post: action.payload,
            }
        default:
            return state
    }
}

export default postReducer