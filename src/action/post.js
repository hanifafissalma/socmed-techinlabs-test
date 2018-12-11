import {post} from '../api/post.js';

export function fetchAllPost(){
    return{
      type: "GET_ALL_POST",
      payload: post.fetchAllPost()
    }
}

export function fetchPostById(id){
  return{
    type: "GET_POST_BY_ID",
    payload: post.fetchPostById(id)
  }
}

export function fetchPostDetail(id){
  return{
    type: "GET_POST_DETAIL",
    payload: post.fetchPostDetail(id)
  }
}

export function addPost(input){
  return (dispatch)=>{
    dispatch({
      type: "ADD_POST",
      payload: post.addPost(input)
    })
  }
}

export function editPost(id,input){
  return (dispatch)=>{
    dispatch({
      type: "EDIT_POST",
      payload: post.editPost(id,input)
    })
  }
}

export function deletePost(id){
  return (dispatch)=>{
    dispatch({
      type: "DELETE_POST",
      payload: post.deletePost(id)
    })
  }
}
  