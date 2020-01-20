import React, { Component } from 'react';
//import logo from './logo.svg';
import Subject from './components/Subject';
import Content from './components/Content';
import TOC from './components/TOC';
import './App.css';






class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject:{
        title:'WEB', 
        sub:'World Wide Web!'
      },
      toc: [
        {id:1, title:'HTML', desc:'HTML is..'},
        {id:2, title:'CSS', desc:'CSS is..'},
        {id:3, title:'JavaScript', desc:'JavaScript is..'},
      ],
      content:{
        title:'HTML',
        desc:'HTML is HyperText Markup Language.'
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject>
        <TOC data={this.state.toc}></TOC>
        <Content 
          title={this.state.content.title} 
          desc={this.state.content.desc}>
        </Content>
      </div>
    )
  }
}

export default App;

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

