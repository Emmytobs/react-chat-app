import React from 'react';
import { Route,  } from 'react-router'
import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'

function App() {
  return (
    <>
      <Route exact path="/" component={Join} />
      <Route path="/chat" component={Chat} />
    </>
  );
}

export default App;
