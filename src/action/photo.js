import {photo} from '../api/photo.js';

export function fetchPhotoByAlbum(id){
    return{
      type: "GET_PHOTO_BY_ALBUM",
      payload: photo.fetchPhotoByAlbum(id)
    }
}

export function fetchPhotoById(id){
  return{
    type: 'GET_PHOTO_BY_ID',
    payload: photo.fetchPhotoById(id)
  }
}
  