import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Profile } from './components/Profile';
import { Characters } from './pages/Characters';
import { Switch, BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Switch>
          <Route path='/characters' component={Characters} />
          <Route path='/' exact component={Profile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
