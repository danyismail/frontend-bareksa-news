import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Navbar extends Component {
 render(){
   return (<div>
     <nav className="navbar navbar-default">
     <div className="container-fluid">
        <div className="navbar-header">
            <Link className="navbar-brand" to="/">Home</Link>
            <Link className="navbar-brand" to="/news">News</Link>
        </div>
     </div>
     </nav>
   </div>)
 }
}
export default Navbar;