import React from 'react';
import GithubRepo from './GithubRepo';

class Repos extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      repos: []
    }
  }

  componentDidMount = () => {
    fetch(`https://api.github.com/users/${this.props.params.username}/repos`, {
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
          repos:data
        })
        // console.log(data)

      })
  }

  renderRepos(repo){
    console.log(repo.html_url)
    return <GithubRepo name={repo.name} login={repo.owner.login} url={repo.html_url} stargazer={repo.stargazers_count}/>
  }

  render (){
    if (!this.state.repos) {
    return <div>LOADING REPOS...</div>
    }

    return (
    <div className="Repos-page">
      <h2>{this.props.params.username}'s repos</h2>
      <ul>
        {this.state.repos.map(this.renderRepos)}
      </ul>
    </div>
    );
  }
};

export default Repos;
