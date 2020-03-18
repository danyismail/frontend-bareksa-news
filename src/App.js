import React, {  Component } from 'react';
import {BrowserRouter, Route,} from 'react-router-dom'
import Header from './Header';
import Menu from './Menu';
import Home from './Home';
import Content from './Content';
import DetailNews from './DetailNews';
import Footer from './Footer';

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        
        <Header className="Header"></Header>
        <Menu></Menu>
          <Route exact path="/" component={Home} />
          <Route path="/news" component={Content} />
          <Route path="/news/:id" component={DetailNews} />
        <Footer className="Footer"></Footer>
        
      </BrowserRouter>
    );
  }
}


export default App;
