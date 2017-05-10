import React from 'react';

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

export default UserList;