import React from 'react';
import PropTypes from 'prop-types';

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
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired
};

export default UserCard;