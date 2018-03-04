import React from 'react';
import {render} from 'react-dom';

import $ from 'jquery';

import tools from '../tools/data'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import Main from './components/Main.jsx'
import Submit from './components/Submit.jsx'


class App extends React.Component {
  constructor() {
    super();
    this.baseUrl = 'http://localhost:8000/api/'
    this.state = {
      content: {},
      data: {},
      oldData: {}
    };


    // this.updateContent = this.updateContent.bind(this);

  }

  componentWillMount() {
    // $.get(this.baseUrl+"movies/M8L8L3N4I6M", function( data ) {
    //     this.state = {
    //         "content": data.Content,
    //         "data": data
    //     };
    // });
    const data = {
      id: '8L8L3N4I6M',
      CurrentVersion: 3,
      Type: 'Movie',
      History: [],
      Content: [{
        relationId: '1',
        fields: [
          {
            name: 'name',
            value: 'find missing number in an array'
          },
          {
            name: 'source',
            value: 'https://inbox.google.com/u/0/'
          }
        ]
      },
      {
        relationId: 5,
        fields: [
          {
            name: 'person',
            value: 'P1'
          },
          {
            name: 'movie',
            value: 'M1'
          }
        ]
      }],
      RandomId: 0.9292929,
      calculated: []
    };

    this.setState({data: data});

    this.setState({content: data.content});
    this.setState({oldData: this.state.data});


  }

  updateContent(newContent) {
    this.setState({content: newContent});

    const tempData = this.state.data;
    tempData.content = newContent
    this.setState({data: tempData});
  }


  render() {
    console.log(this.state.content);
    return (
      <div>
        <Header />
        <Main content={this.state.content} updateContent={this.updateContent.bind(this)} />
        <Footer />
      </div>

    )
  }
}

render(<App />, document.getElementById('app'));
