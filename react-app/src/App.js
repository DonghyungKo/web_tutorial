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
      mode:'welcome',
      subject:{title:'WEB', sub:'World Wide Web!'},
      
      toc: [
        {id:1, title:'HTML', desc:'HTML is..'},
        {id:2, title:'CSS', desc:'CSS is..'},
        {id:3, title:'JavaScript', desc:'JavaScript is..'},
      ],

      content:{
        title:'HTML',
        desc:'HTML is HyperText Markup Language.'
      },
      welcome:{title:'Welcome', desc:'Hello, React!'},
    }
  }

  render() {
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read'){
      _title = this.state.content.title;
      _desc = this.state.content.desc;
    }

    function chgModeOnClicked(e){
      e.preventDefault();
      if (this.state.mode === 'welcome'){
        this.setState({mode:'read'});
      } else if (this.state.mode === 'read'){
        this.setState({mode:'welcome'});
      }
    }
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){
            alert('hihihi')
          }.bind(this)}
          >
        </Subject>
        {/* <header>
          <h1>
            <a href="/" onClick={function(e){
              e.preventDefault();
              if (this.state.mode === 'welcome'){
                this.setState({mode:'read'});
              } else if (this.state.mode === 'read'){
                this.setState({mode:'welcome'});
              }
            }.bind(this)}>
              {this.state.subject.title}
            </a>
          </h1>
          {this.state.subject.sub}
        </header>   */}
        <TOC data={this.state.toc}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
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

