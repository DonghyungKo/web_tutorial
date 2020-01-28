import React, { Component } from 'react';
//import logo from './logo.svg';
import Subject from './components/Subject';
import {ReadContent, CreateContent, UpdateContent} from './components/Content';
import TOC from './components/TOC';
import Control from './components/Control';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.maxContentId = 3;
    this.state = {
      mode:'read',

      subject:{title:'WEB', sub:'World Wide Web!'},
      
      controls: [
        {id:1, title:'create'},
        {id:2, title:'update'},
        {id:3, title:'delete'},
      ],       

      selectedContentId : 1,

      contents: [
        {id:1, title:'HTML', desc:'HTML is..'},
        {id:2, title:'CSS', desc:'CSS is..'},
        {id:3, title:'JavaScript', desc:'JavaScript is..'},
      ],       

      welcome:{title:'Welcome', desc:'Hello, React!'},
    }
  }
  getReadContent () {
    for (let i=0; i < this.state.contents.length; i++){
      const content = this.state.contents[i]

      if (content.id === this.state.selectedContentId){
        return content;
        }
      }
    }

  updateOnSubmit (_title, _desc) {
    let newContents = Array.from(this.state.contents);
    
    for (let i=0; i<newContents.length; i++){
    
      if ((i+1) === this.state.selectedContentId){
        newContents[i].title = _title
        newContents[i].desc = _desc
        break
        }
      } 
    this.setState({contents : newContents})
    }
  
  getContent () {
    let _article = null;

    if(this.state.mode === 'welcome'){
      const _welcome = this.state.welcome;
      _article = <ReadContent title={_welcome.title} desc={_welcome.desc}></ReadContent>;
   
    } else if(this.state.mode === 'read'){
      const _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>;
     
    } else if (this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title, _desc){
        // add content to this.state.contents
        this.maxContentId = this.maxContentId +1;
        
        const newContents = Array.from(this.state.contents);
        newContents.push(
          {id:this.maxContentId, title:_title, desc:_desc}
        );

        this.setState(
          {contents: newContents}, 
          function() {console.log(this.state.contents)}
        );
        
        debugger
      }.bind(this)}>     
      </CreateContent> ; 
      
    } else if (this.state.mode === 'update'){
      const _content = this.getReadContent();

      _article = <UpdateContent 
          content={_content}
          onSubmit={this.updateOnSubmit.bind(this)}
        ></UpdateContent>;
    }
    return _article;
  }

  render() {
    
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

        <Control
          onChangeMode={function(_mode){
            this.setState({mode: _mode});
          }.bind(this)}
        ></Control>

        <TOC
          contents={this.state.contents}
          onChangePage={function(id){
            this.setState({
              mode: 'read',
              selectedContentId: Number(id),
            });
          }.bind(this)}
          
          >
        </TOC>
        {this.getContent()}

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

