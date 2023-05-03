import React,{useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

export default function App() {
  const [mode , setMode] = useState('light');
  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor= '#151D3B';
      // showAlert("Dark mode is enable","success");
      document.title="TextUtils - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      // showAlert("Light mode is enable","success");
      document.title="TextUtils - Light Mode";
    }
  }

  return (
    <>
     <Navbar title="Textutils" title1="Home" title2="About" mode={mode} toggleMode={toggleMode} />
     <TextForm mode={mode} />
     </>
    
  )
}
