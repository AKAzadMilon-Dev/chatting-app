import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './components/App';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Register from './components/auth/Register';
import Login from './components/auth/Login';

const Routing = ()=>{
  return(
    <Router>
      <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </Router>
  )
}

ReactDOM.render(<Routing />,document.getElementById('root'));

