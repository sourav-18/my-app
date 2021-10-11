import './App.css';
import Navbar from './component/Navbar';
import Textutils from './component/Textutils';
import Alert from './component/Alert';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState("light")
  const darkSwitch=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.background="black";
    }
    else if(mode==='blue'){
      setMode('dark');
      document.body.style.background="black";
    }
    else if(mode==='pink'){
      setMode('dark');
      document.body.style.background="black";
    }
  };
  const lightSwitch=()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.background="white";
    }
    else if(mode==='blue'){
      setMode('light');
      document.body.style.background="white";
    }
    else if(mode==='pink'){
      setMode('light');
      document.body.style.background="white";
    }
  }
    const blueSwitch=()=>{
      if(mode==='dark'){
        setMode('blue');
        document.body.style.background="#040423";
      }
      else if(mode==='light'){
        setMode('blue');
        document.body.style.background="#040423";
      }
      else if(mode==='pink'){
        setMode('blue');
        document.body.style.background="#040423";
      }
    }
    const pinkSwitch=()=>{
      if(mode==='dark'){
        setMode('pink');
        document.body.style.background="#ffc7d18c";
      }
      else if(mode==='light'){
        setMode('pink');
        document.body.style.background="#ffc7d18c";
      }
      else if(mode==='blue'){
        setMode('pink');
        document.body.style.background="#ffc7d18c";
      }
  }

 
  return (
    <>
    <Navbar mode={mode} lightSwitch={lightSwitch} blueSwitch={blueSwitch} darkSwitch={darkSwitch} pinkSwitch={pinkSwitch}/>
    <Alert/>
    <Textutils  heading="Enten Text Hear Convert Aeny Form You Need" mode={mode}/>

    </>

  );

}

export default App;
