import axios from 'axios';

export const fetchPhotoByAlbum =  (id) => {
    return (dispatch) => {
      axios.get('https://jsonplaceholder.typicode.com/albums/'+id+'/photos')
        .then(response => {
          const photo = response.data
          dispatch({
            type: 'GET_PHOTO_BY_ALBUM',
            payload: photo
          })
        }).catch(
            (err)=>{
              console.log(err)
            }
          )
    }
}

export const fetchPhotoById =  (id) => {
  return (dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/photos/'+id)
      .then(response => {
        const photo = response.data
        dispatch({
          type: 'GET_PHOTO_BY_ID',
          payload: photo
        })
      }).catch(
          (err)=>{
            console.log(err)
          }
        )
  }
}