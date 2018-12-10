import axios from 'axios';

export const fetchAllUser =  () => {
    return (dispatch) => {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          const user = response.data
          dispatch({
            type: 'GET_ALL_USER',
            payload: user
          })
        }).catch(
            (err)=>{
              console.log(err)
            }
          )
    }
  }