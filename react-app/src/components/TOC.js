import React, { Component } from 'react';

class TOC extends Component {
  render() {
    var list = [];
    var data = this.props.data;
    for (var i = 0; i < this.props.data.length; i++) {
      
      list.push(
        <li key={data[i].id}>
          <a 
            href={"/content/"+data[i].id+'.html'}
            onClick={function(id, e){
              e.preventDefault();
              this.props.onChangePage(id);
            }.bind(this, data[i].id)}
          >
            {data[i].title}
          </a>
        </li>)
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
