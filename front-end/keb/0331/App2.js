import React, { Component } from 'react';
import './App.css';


class TOC extends Component {
  render(){
    return(
      <nav>
        <ul>
          <li><a href="1.html">{this.props.one}</a> </li>
          <li><a href="2.html">{this.props.two}</a></li>
          <li><a href="3.html">{this.props.three}</a></li>
        </ul>
      </nav>
    );
  }
}

class Content extends Component {
  render(){
    return(
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

class Subject extends Component {
  render(){
    return(
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}

class App2 extends Component {
  render(){
    return (
      <div className="App">
        <Subject title="IT융합학부 커뮤니티" sub="IT융합학부 입학예정자, 재학생, 졸업자들의 커뮤니티 입니다."></Subject>
        <TOC one="입학예정자" two="재학생" three="졸업자"></TOC>
        <Content title="IT에 관심이 있으신가요?" desc="IT융합학부 커뮤니티는 IT에 관심있는 여러분들을 환영합니다."></Content>
      </div>
    );
  }
}

export default App2;
