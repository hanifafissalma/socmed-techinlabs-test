import React, { Component } from 'react';
import Home from './pages/Home';
import ListFriends from './pages/ListFriends';
import PostUser from './pages/subpages/PostUser';
import Album from './pages/subpages/Album';
import AlbumDetail from './pages/subpages/AlbumDetail';
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Home/> */}
        {/* <ListFriends/> */}
        {/* <PostUser/> */}
        {/* <Album/> */}
        <AlbumDetail/>
      </div>
    );
  }
}

export default App;
