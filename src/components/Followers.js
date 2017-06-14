import React from 'react'
import GithubUser from './GithubUser';

class Followers extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      followers: []
    }
  }

  componentDidMount = () => {
    fetch(`https://api.github.com/users/${this.props.params.username}/followers`, {
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
          followers:data
        })
      })
  }

  renderFollower(follower){
    return <GithubUser key={follower.id} login={follower.login} avatar_url={follower.avatar_url}/>
  }

  render (){
    if (!this.state.followers) {
    return <div>LOADING FOLLOWERS...</div>
    }

    return (
    <div className="followers-page">
      <h2>Followers of {this.props.params.username}</h2>
      <ul>
        {this.state.followers.map(this.renderFollower)}
      </ul>
    </div>
    );
  }
};

export default Followers;
