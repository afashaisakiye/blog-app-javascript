import React, { Component} from "react";
import AddPost from './components/AddPost';
import Posts from './components/Posts';
import {BrowserRouter as Router , Switch , Link , Route, useParams } from 'react-router-dom'
import { EditPost } from './components/EditPost';
import PostContextProvider from "./context/PostContext";

class App extends Component {
   constructor(){
     super();
     this.id=0;
   }

  reRenderPosts=()=>{
    this.forceUpdate();
  }
  
  render() {
    return (
      <Router>
      <Switch >
       <PostContextProvider>
       <Route path="/create">
          <AddPost  reRender={this.reRenderPosts }  />
          {/* <PreviewPost /> */}
        </Route>

        <Route exact path="/">
        <span> <Link to="/create">Create Post</Link></span>
          <Posts />
        </Route>
        <Route path="/edit/:id">
          <EditPost reRender={this.reRenderPosts} />
        </Route>
       </PostContextProvider>
      </Switch>
      </Router>
    );
  }
}

export default App;
