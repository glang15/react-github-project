import React from 'react';
import GithubUser from './GithubUser';

class Following extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      following: []
    }
  }

  componentDidMount = () => {
    fetch(`https://api.github.com/users/${this.props.params.username}/following`, {
      headers: {
        'Authorization': 'token 3a3ffd2c3a053f59f938ec861a7e586073cd6fda'
      }
    })
    .then(function(response){
      console.log(response)
      return response.json()})
      .then((data) => {
        console.log(data)
        this.setState({
          following:data
        })
      })
  }

  renderFollowing(following){
    return <GithubUser key={following.id} login={following.login} avatar_url={following.avatar_url}/>
  }

  render (){
    if (!this.state.following) {
    return <div>LOADING FOLLOWING...</div>
    }

    return (
    <div className="following-page">
      <h2>Followed by {this.props.params.username}</h2>
      <ul>
        {this.state.following.map(this.renderFollowing)}
      </ul>
    </div>
    );
  }
};

export default Following;
