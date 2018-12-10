import axios from 'axios';

export const fetchAllPost =  () => {
    return (dispatch) => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          const post = response.data
          dispatch({
            type: 'GET_ALL_POST',
            payload: post
          })
        }).catch(
            (err)=>{
              console.log(err)
            }
          )
    }
}

export const fetchPostById =  (id) => {
  return (dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/posts?userId='+id)
      .then(response => {
        const post = response.data
        dispatch({
          type: 'GET_POST_BY_ID',
          payload: post
        })
      }).catch(
          (err)=>{
            console.log(err)
          }
        )
  }
}