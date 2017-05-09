import React from 'react';

import '../css/VoteButtons.css';

export default function VoteButtons(props) {
    return (
        <div>
            <button type="button" className='btn btn-success' onClick={props.handleClick.bind(null, 'up')}><i className="glyphicon glyphicon-arrow-up"></i></button>
            <strong> {props.votes} </strong>
            <button type="button" className='btn btn-danger' onClick={props.handleClick.bind(null, 'down')}><i className="glyphicon glyphicon-arrow-down"></i></button>
        </div>
    );
}

VoteButtons.propTypes = {
    votes: React.PropTypes.number.isRequired,
    handleClick: React.PropTypes.func.isRequired
};
