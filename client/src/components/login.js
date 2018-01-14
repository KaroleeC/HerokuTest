import React from 'react';
import base from '../firebase.js';

class Login extends React.Component {
  constructor() {
    super();
  
    this.state = {
      user: null
    }
  }

  render() {
    return (
      <div>
        <div className="text-center" style={{marginTop: '40px', fontSize: '100px'}}>
          <h1>Food Thoughts</h1>
        </div>
        <div className="card offset-sm-4 col-sm-4 offset-sm-4 border-secondary" style={{marginTop: '50px'}} >
          <h2 className="card-header text-center">Login</h2>
          <form className="card-body container">
            <button onClick={base.googleLogin} className="btn btn-danger col-sm-12" style={{marginBottom: '1%'}}>Google</button>
            <button onClick={base.facebookLogin} className="btn btn-primary col-sm-12" style={{marginBottom: '1%'}}>Facebook</button>
            <button onClick={base.githubLogin} className="btn btn-secondary col-sm-12">GitHub</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;