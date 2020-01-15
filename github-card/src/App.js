  
import React from 'react';
import Axios from 'axios';
import './App.css';

import User from './components/User';
import Followers from './components/Followers';

class App extends React.Component {
  //setup state
  constructor() {
    super();
    this.state = {
      myGitHub: {}
    }
  }

  // ran once upon mount
  componentDidMount() {
    Axios.get('https://api.github.com/users/davebettswebdev')
    .then(res => {
      this.setState({myGitHub: res.data});
      console.log(this.state);
    })
  }

  //render component
  render() {
    return(
      <div className='App'>
        <User profile={this.state.myGitHub}/>
        <Followers />
      </div>
    );
  }
}

export default App;