import React, { Component } from 'react';
import TopBar from './components/TopBar/TopBar'
import {
  Switch,
  Route
} from "react-router-dom";
import NewProject from './components/NewProject/NewProject'
import ProjectList from './components/Project/ProjectList'

class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <Switch>
          <Route exact path='/'>
              <ProjectList />
          </Route>
          <Route path='/NewProject'>
            <NewProject />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
