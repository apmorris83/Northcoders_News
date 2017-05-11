import React from 'react';

import '../css/UserCard.css';

function UserCard (props) {
    return (
        <div className="well">
            <div className="media">
                <div className="media-left">
                    <img className="profile-pic" src={props.avatar_url} alt="profile picture" />
                </div>
                <div className="media-body">
                    <h3>{props.name}</h3>
                    <strong>{props.username}</strong>
                </div>
            </div>
        </div>
    );
}

UserCard.propTypes = {
    name: React.PropTypes.string.isRequired,
    username: React.PropTypes.string.isRequired,
    avatar_url: React.PropTypes.string.isRequired
};

export default UserCard;