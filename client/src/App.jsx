import React, {Component} from 'react';
import axios from 'axios';
import Login from './Login';
import Signup from './Signup';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      token: '',
      user: null,
      errorMessage: '',
      apiData: null
    }
    this.checkForLocalToken = this.checkForLocalToken.bind(this)
    this.liftToken = this.liftToken.bind(this)
    this.handleLogOut = this.handleLogOut.bind(this)
  }
  checkForLocalToken() {
    var token = localStorage.getItem('mernToken');
    if (!token || token === 'undefined'){
      // Token is invalid or missing
      localStorage.removeItem('mernToken');
      this.setState({
        token: '',
        user: null
      })
    } else {
      // we found a token in localStorage, verify it
      axios.post('/auth/me/from/token', {token})
        .then(res => {
          if(res.data.type === 'error'){
            localStorage.removeItem('mernToken')
            this.setState({
              token: '',
              user: null,
              errorMessage: res.data.message
            })
          } else {
            localStorage.setItem('mernToken', res.data.token);
            this.setState({
              token: res.data.token,
              user: res.data.user,
              errorMessage: ''
            })
          }
        })
    }
  }

  liftToken(data){
    this.setState({
      token: data.token,
      user: data.user
    })
  }
  componentDidMount(){
    this.checkForLocalToken();
  }

  handleLogOut(e){
    this.setState({
      token: '',
      user: null
    })
    localStorage.removeItem('mernToken');
  }

  render(){
    var user = this.state.user;
    var contents 
    if(user){
      contents = (
        <>
        <p>Hello, {user.name}</p> <br/>
        <button onClick={this.handleLogOut}>Log Out</button>
        </>
      );
    } else {
      contents = (
        <Router>
          <Route exact path='/' 
          render={() => <Login liftToken={this.liftToken}/>} />
          <Route path='/signup' component={Signup}/>
        </Router>
      )
    }
    return(
      <div>
        <nav>
          <a>Logo</a> |
          <a>Contact</a>|
          <a>About</a>
        </nav>
        <h1>{contents}</h1>
      </div>
      
    );
  }
}


export default App;