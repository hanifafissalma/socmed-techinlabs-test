import {album} from '../api/album.js';

export function fetchAlbumById(id){
    return{
      type: "GET_ALBUM_BY_ID",
      payload: album.fetchAlbumById(id)
    }
}
  