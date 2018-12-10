import axios from 'axios';

export const fetchAllComment =  (id) => {
    return (dispatch) => {
      axios.get('https://jsonplaceholder.typicode.com/posts/'+id+'/comments')
        .then(response => {
          const comment = response.data
          dispatch({
            type: 'GET_ALL_COMMENT',
            payload: comment
          })
        }).catch(
            (err)=>{
              console.log(err)
            }
          )
    }
  }