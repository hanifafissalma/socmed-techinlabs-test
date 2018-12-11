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

export const fetchPostDetail =  (id) => {
  return (dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
      .then(response => {
        const post = response.data
        dispatch({
          type: 'GET_POST_DETAIL',
          payload: {
            post: post
          }

        })
      }).catch(
          (err)=>{
            console.log(err)
          }
      )
  }
}

export const addPost =  (input) => {
  return (dispatch) => {
    axios.post('https://jsonplaceholder.typicode.com/posts/',input,{
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => {
        const post = response.data
        dispatch({
          type: 'ADD_POST',
          payload: {
            post: post
          }
        })
      }).catch(
          (err)=>{
            console.log(err)
          }
      )
  }
}

export const editPost =  (id, input) => {
  return (dispatch) => {
    axios.put('https://jsonplaceholder.typicode.com/posts/'+id,input,{
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => {
        const post = response.data
        dispatch({
          type: 'EDIT_POST',
          payload: {
            post: post
          }
        })
      }).catch(
          (err)=>{
            console.log(err)
          }
      )
  }
}

export const deletePost =  (id) => {
  return (dispatch) => {
    axios.put('https://jsonplaceholder.typicode.com/posts/'+id)
      .then(response => {
        const post = response.data
        dispatch({
          type: 'DELETE_POST',
          payload: {
            post: post
          }
        })
      }).catch(
          (err)=>{
            console.log(err)
          }
      )
  }
}