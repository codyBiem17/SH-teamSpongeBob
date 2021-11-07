import React, { useState, useEffect } from 'react';
import './App.css';
import {Footer, Header, Main} from './components'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  },[])

  return (
    <div className="App">
      {
        loading ? "loading...please wait" :
        <>
          <Header />
          <Main />
          <Footer />
        </>
      }
    </div>
  );
}

export default App;
