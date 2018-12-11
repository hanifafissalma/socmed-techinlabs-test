const initialState = {
    album: []
}
  
const albumReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALBUM_BY_ID':
            return {
                ...state,
                album: action.payload,
            }
        default:
            return state
    }
}

export default albumReducer