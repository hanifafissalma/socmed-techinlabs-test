import React, { Component } from 'react';
import Home from './pages/Home';
import ListFriends from './pages/ListFriends';
import PostUser from './pages/subpages/PostUser';
import Album from './pages/subpages/Album';
import AlbumDetail from './pages/subpages/AlbumDetail';
import PhotoDetail from './pages/subpages/PhotoDetail';
import PostDetail from './pages/subpages/PostDetail';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={props => <Home {...props} />} />
            <Route path="/list_friends" render={props => <ListFriends {...props} />} />
            <Route path="/user/:id" render={props => <PostUser {...props} />} />
            <Route path="/album/:id" render={props => <Album {...props} />} />
            <Route path="/list_album/:id" render={props => <AlbumDetail {...props} />} />
            <Route path="/photo/:id" render={props => <PhotoDetail {...props} />} />
            <Route path="/post/:id" render={props => <PostDetail {...props} />} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
