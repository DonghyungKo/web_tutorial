import React, { Component } from 'react';

class TOC extends Component {
  shouldComponentUpdate(newProps, newState){
    console.log('===> TOC render shouldComponenetUpdate')
    if (newProps.contents === this.props.contents){
      return false;
    }
    return true;
  }

  render() {
    console.log('===> TOC render')
    
    const list = [];
    const contents = this.props.contents;
    
    for (let i = 0; i < this.props.contents.length; i++) {
      const _content = contents[i]

      list.push(
        <li key={_content.id}>
          <a 
            href={"/content/"+_content.id+'.html'}
            onClick={function(id, e){
              e.preventDefault();
              this.props.onChangePage(id);
            }.bind(this, _content.id)}
            >
            {_content.title}
          </a>
        </li>
        )
      }
    
    return (
      <nav>
        <ul>
          {list}
        </ul>
      </nav>   
    );
  }
}
  
export default TOC;
