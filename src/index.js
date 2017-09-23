import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
//import { Provider, connect } from 'react-redux';
//import { ThemeProvider } from 'styled-components';

if (module && module.hot) {
  module.hot.accept();
}

//console.log(`Looks like we are in ${process.env.NODE_ENV} mode!`);

class App extends Component {

  // static propTypes = {};
  //
  // static defaultProps = {
  //   hideSideMenu: false,
  //   auth: {
  //     loading: true
  //   }
  // };

  render () {

    return <main>
      <ul>
        <li>Test</li>
      </ul>
    </main>

  }

}
