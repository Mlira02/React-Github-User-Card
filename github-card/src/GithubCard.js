import React from 'react';
import './GithubCard.css'
const GithubCard = (props) => {
    console.log(props)
    return ( 
        <>
        <div className="outer">
            <div className="username-container">
                <img src={props.data.avatar_url} className="user-logo" />
                <h2>{props.data.login}</h2>
            </div>
            <h3>Bio: {props.data.bio}</h3>
            <h4>Location: {props.data.location}</h4>
                <h5>Blog: <a href={ props.data.blog }>{props.data.blog}</a></h5>
            <h2>Followers</h2>
            {props.followers.map(thing => (
                <div>
                    <div className="Follower-container">
                        <div className="username-container">
                        <img src={thing.avatar_url} alt="user logo" className="user-logo" />
                        <h2>{thing.login}</h2>
                        </div>
                        <h4>User Profile: <a href={thing.html_url}>Click here!</a></h4>
                    </div>
                </div>
            ))}

        </div>
        </>
     );
}
 


export default GithubCard;
 