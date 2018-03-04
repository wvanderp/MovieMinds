import React from 'react';

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import Main from './components/Main.jsx'


export default class App extends React.Component {


  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}
