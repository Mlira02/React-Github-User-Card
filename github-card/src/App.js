import React from 'react';
import GithubCard from './GithubCard';
import axios from 'axios';
import './App.css';


class App extends React.Component {
    state = {
      githubData: [],
      githubFollowers: []
     }

     componentDidMount() {
       axios.get('https://api.github.com/users/Mlira02')
       .then(res => {
         const githubData = res.data
         this.setState({ githubData })
         console.log(res.data);
       })
         axios.get('https://api.github.com/users/Mlira02/followers')
         .then(res => {
           const githubFollowers = res.data
           this.setState({ githubFollowers })
           console.log(res.data)
         })
       .catch(err => {
         console.log('there was an error', err)
       });
     }

     render() {
       return ( 
         <div className="app-container">
          <header>
            <img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="OctoCat" className="Logo" />
            <h1 className="Logo-name">GitHub</h1>
          </header>
          <GithubCard data={ this.state.githubData } followers={ this.state.githubFollowers } />
      </div>
  )}}

 
export default App;
