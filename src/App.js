import './App.css';
import React,{Component} from 'react';
import TOC from "./components/TOC"
import Content from "./components/Content"
import Subject from "./components/Subject"

class App extends Component{
  render(){
    return(
      <div className="App">
        <Subject title="WEB" sub="World Wide Web"></Subject>
        <Subject title="React" sub="for UI"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is Hypertext Markup Language"></Content>
      </div>
    );
  }
}

export default App;
