import React from 'react';
import './App.css';

// import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// import component's
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Search from './components/Search.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <About />
        <Search />
      </div>
    )
  }
}

export default App;
