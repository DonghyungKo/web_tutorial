import React, { Component } from 'react';

class ReadContent extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}


class CreateContent extends Component {
  render() {
    return (
      <article>
        <h2>Create</h2>
        <form 
          action='/createProcess' 
          method='post'
          onSubmit={function(e){
            e.preventDefault();
            var _title = e.target.title.value;
            var _desc = e.target.desc.value;
            this.props.onSubmit(_title, _desc);
           }.bind(this)}
          >
          <p>
            <input 
              type='text' 
              name='title' 
              placeholder='title'
             ></input>
          </p>
          <p>
            <textarea 
              name='desc' 
              placeholder='description'
            ></textarea>
          </p>
          <p>
            <input type='submit'></input>
          </p>
        </form>
      </article>
  )
  }
}


class UpdateContent extends Component {
  constructor(props){
    super(props);
    this.state = {
      title : this.props.content.title,
      desc : this.props.content.desc
    }
    this.inputFormHander = this.inputFormHander.bind(this);
  }

  inputFormHander(e){
    this.setState({[e.target.name] : e.target.value})
  }

  render() {
    
    return (
      <article>
        <h2>Update</h2>
        <form action='/createProcess' method='post'
          onSubmit={function(e){
            e.preventDefault();
            const _title = e.target.title.value;
            const _desc = e.target.desc.value;
            this.props.onSubmit(_title, _desc);
          }.bind(this)}
        >
          <p>
            <input 
              type='text' 
              name='title' 
              placeholder='title'
              value={this.state.title}
              onChange={this.inputFormHander}
              ></input>
          </p>
          <p>
            <textarea 
              name='desc' 
              placeholder='description'
              value={this.state.desc}
              onChange={this.inputFormHander}
            ></textarea>
          </p>
          <p>
            <input type='submit'></input>
          </p>
        </form>
      </article>
  )
  }
}

export {ReadContent, CreateContent, UpdateContent}