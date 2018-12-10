const initialState = {
    comment: []
}
  
const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_COMMENT':
            return {
                ...state,
                comment: action.payload,
            }
        default:
            return state
    }
}

export default commentReducer