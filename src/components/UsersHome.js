import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import PropTypes from 'prop-types';

import UserList from './UserList';

class UsersHome extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }
    render() {
        return (
            <div className="container">
                    <UserList
                    users={this.props.users}
                    />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users.users
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchUsers: () => {
            dispatch(actions.fetchUsers());
        }
    };
}

UsersHome.propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersHome);