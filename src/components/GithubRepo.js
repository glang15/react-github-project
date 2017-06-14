import React from 'react';
import MyStar from 'react-icons/lib/ti/star';
// import {Link} from 'react-router'

class GithubRepo extends React.Component {

  render(){
    return (
      <div class="RepoStyle" style={{display:'flex', alignItems: 'center'}}>
      <a style={{textDecoration: 'none', color: 'black'}} href={this.props.url} target="_blank">
        <p style={{margin: 10}}>{this.props.login}\{this.props.name}</p>
      </a>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'thin solid black', height: '15px', width: '40px', fontSize: 12}}>
          {this.props.stargazer}
          <MyStar />
      </div>
    </div>
  );
  }

};

export default GithubRepo;
