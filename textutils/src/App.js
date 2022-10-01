import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Message from './components/Message';
import Greet from './components/Greet';
 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      <div className="container my-3">
        <Router>
          <Alert alert={alert}/>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()}/>
          <Routes>
            <Route exact path="/about"
              element={<About mode={mode} />}>
            </Route>
            <Route exact path="/" element={
              <TextForm showAlert={showAlert} heading="Try TextUtils - word counter,spaces" mode={mode}/>}>
            </Route>
            <Route exact path="/greet"
              element={<Greet name={"Diana"} heroName={"Wonder"}/>}>
            </Route>
            <Route exact path="/message"
              element={<Message/>}>
            </Route>
          </Routes>
        </Router>
      </div>
    
    </> 
  );
}

export default App;