import axios from 'axios';

export const fetchAlbumById =  (id) => {
    return (dispatch) => {
      axios.get('https://jsonplaceholder.typicode.com/albums/'+id+'/photos')
        .then(response => {
          const album = response.data
          dispatch({
            type: 'GET_ALBUM_BY_ID',
            payload: album
          })
        }).catch(
            (err)=>{
              console.log(err)
            }
          )
    }
  }