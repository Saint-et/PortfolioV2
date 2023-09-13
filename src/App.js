import './sass/body.scss';
import React, { useState, useEffect } from "react";
import Home from './layouts/Home';
import { user } from './data/Data';
import NaveBar from './NavBar/NavBar';
import Preview from './components/Preview';
import { AppProvider } from './contexts/UseAppContext';


function App() {

  return (
    <AppProvider>
    <NaveBar user={user} />
    <Preview />
      <div>
        <Home user={user} />
      </div>
    </AppProvider>
  );
}

export default App;
