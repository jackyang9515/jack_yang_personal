import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import OnitamaBoardGame from './OnitamaBoardGame'
import Myshell from './Myshell'
import ThreeMusketeers from './ThreeMusketeers'
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import reportWebVitals from './reportWebVitals';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="Myshell" element={<Myshell />} />
          <Route path="ThreeMusketeers" element={<ThreeMusketeers />} />
          <Route path="OnitamaBoardGame" element={<OnitamaBoardGame />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
