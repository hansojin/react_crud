import './App.css';
import React,{Component} from 'react';
import TOC from "./components/TOC"
import Content from "./components/Content"
import Subject from "./components/Subject"

class App extends Component{

  constructor(props){   // state initalize
    super(props);
    this.state={
      subject:{title:'WEB',sub:'World Wide Web'},
      contents:[
        {id:1, title:'HTML',desc:'for information'},
        {id:2, title:'CSS',desc:'for design'},
        {id:3, title:'JS',desc:'for interactive'}
      ]
    }
  } 

  render(){
    return(
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <TOC data = {this.state.contents}></TOC>
        <Content title="HTML" desc="HTML is Hypertext Markup Language"></Content>
      </div>
    );
  }
}

export default App;
