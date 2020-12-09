import React from 'react';
//Components and pages
import Home from './pages/Home';
import Nav from '../src/components/Nav';
//Styles
import GlobalStyles from './components/GlobalStyles';
//Router
import { Route } from 'react-router-dom';
import GameDetail from './components/GameDetail';

function App() {
  return (
    <div className='App'>
      <GlobalStyles />
      {/* <Route path='/'>
        <Home />
      </Route>
      <Route path='/:id'>
        <GameDetail />
      </Route> */}
      <Nav />
      <Route path={['/game/:id', '/']}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
