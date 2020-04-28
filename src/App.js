import React from 'react';
import logo from './logo.svg';
import './App.css';

// import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// import React-Bootstrap COmponent's
import Container from 'react-bootstrap/Container'

// import component's
import Header from './components/Header.jsx';
import About from './components/About.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <About />
      </div>
    )
  }
}

export default App;
