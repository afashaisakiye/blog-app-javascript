import React, { Component} from "react";
import AddPost from './components/AddPost';
import Posts from './components/Posts';
import {BrowserRouter as Router , Switch , Link , Route } from 'react-router-dom'
import { EditPost } from './components/EditPost';

class App extends Component {
  reRenderPosts=()=>{
    this.forceUpdate();
  }
  
  render() {
    return (
      <Router>
        <ul>
          <li>
            <Link to="/create">Create Posts</Link>
          </li>
        </ul>

      <Switch >
        <Route path="/create">
          <AddPost  reRender={this.reRenderPosts }  />
          {/* <PreviewPost /> */}
        </Route>

        <Route exact path="/">
          <Posts  reRender={ this.reRenderPosts } />
        </Route>
        <Route path="/edit/0">
          <EditPost index={0} />
        </Route>
      </Switch>
      </Router>
    );
  }
}

export default App;
