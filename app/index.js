/**
 * Module dependencies
 */
import React from 'react';
import Home from './pages/home';
import './styles.scss';

/**
 * UI Components
 */
import Navbar from './components/navbar';

/**
 * View Component
 */
class App extends React.Component {

  render() {

    return (
      <React.Fragment>
        <Navbar />
        <Home />
      </React.Fragment>
    );
  }
}

export default App;
