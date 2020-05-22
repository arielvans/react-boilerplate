/**
 * Module dependencies
 */
import React from 'react';
import './styles.scss';

/**
 * UI Components
 */
import Combo from '../../components/combo';

/**
 * View Component
 */
class Home extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div className="home-container">
          <div className="home-container__background">
            <Combo />
          </div>
        </div>
      </React.Fragment >
    );
  }
}

export default Home;

