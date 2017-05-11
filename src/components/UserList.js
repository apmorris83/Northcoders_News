import React from 'react';
import PropTypes from 'prop-types';

import UserCard from './UserCard';

function UserList (props) {
    return (
        <div>
        {props.users.map((user, i) => {
            return <UserCard 
                key={i}
                {...user}
            />;
        })}
        </div>
    );
}

UserList.propTypes = {
    users: PropTypes.array.isRequired
};

export default UserList;