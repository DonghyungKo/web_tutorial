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
      mode:'read',

      subject:{title:'WEB', sub:'World Wide Web!'},
      
      selectedContentId : 1,
      contents: [
        {id:1, title:'HTML', desc:'HTML is..'},
        {id:2, title:'CSS', desc:'CSS is..'},
        {id:3, title:'JavaScript', desc:'JavaScript is..'},
      ],       

      welcome:{title:'Welcome', desc:'Hello, React!'},
    }
  }

  render() {
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read'){
      for (var i=0; i < this.state.contents.length; i++){
        var obj = this.state.contents[i]

        if (obj.id === this.state.selectedContentId){
          _title = obj.title
          _desc = obj.desc
          break
        }
      }
    }

    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode: 'welcome'});
          }.bind(this)}
          >
        </Subject>
        <TOC
          onChangePage={function(id){
            this.setState({
              mode: 'read',
              selectedContentId: Number(id),
            });
          }.bind(this)}
          data={this.state.contents}
          >
        </TOC>
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

