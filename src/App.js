import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Covid from './Components/Dashboard/Covid'

import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {
  return (
    <main className="mainpage">
      <Switch>
        <Route exact path="/">
          <div className="wrapper">
            <Sidebar />
            <div className="mainPrivate">
              <Navbar />
              <Covid />
            </div>
          </div>
        </Route>
        <Route exact path="/covid19">
          <div className="wrapper">
            <Sidebar />
            <div className="mainPrivate">
              <Navbar />
              <Covid />
            </div>
          </div>
        </Route>
        {/* <Route path="*">
          <NotFound404 />
        </Route> */}
      </Switch>
    </main>
  )
}

export default App;
