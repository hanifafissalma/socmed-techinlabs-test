const initialState = {
    photo: []
}
  
const albumReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PHOTO_BY_ALBUM':
            return {
                ...state,
                photo: action.payload,
            }
        case 'GET_PHOTO_BY_ID':
            return {
                ...state,
                photo: action.payload
            }
        default:
            return state
    }
}

export default albumReducer