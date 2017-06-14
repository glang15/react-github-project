import React from 'react'
import {Link} from 'react-router'

class GithubUser extends React.Component {

  render(){
    return (
      <div class="followerStyle" style={{display: 'flex', alignItems: 'center'}}>
      <Link to={`/user/${this.props.login}`}>
        <img src={this.props.avatar_url} style={{width: '50px', height: '50px', margin: '10px', borderRadius: 50}}/>
      </Link>
      <p>{this.props.login}</p>
    </div>
    );
  }

};

export default GithubUser;
