import React from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar/navBar.js';
import Footer from './components/footer/footer.js';

function App() {
  return (
    <div className="App">
    <div id='navBar'>
    <NavBar />
    </div>
    <footer id="footerDiv"></footer>
    </div>
  );
}
ReactDOM.render(<Footer />, document.getElementById("footerDiv"));
export default App;
