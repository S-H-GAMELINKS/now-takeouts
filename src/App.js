import React from 'react';
import logo from './logo.svg';
import './App.css';

// import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// import component's
import Header from './components/Header.jsx';

class App extends React.Component {
  render() {
    return (
      <Header />
    )
  }
}

export default App;
