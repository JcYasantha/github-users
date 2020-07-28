import React from "react";
import UserItem from "./UserItem";
import Loading from "../Loading";
import PropTypes from "prop-types";

const Users = ({ users, loading }) => {
  if (loading) {
    return <Loading className='mt-10' />;
  } else {
    return (
      <div className='row'>
        {users.map((user) => (
          <div key={user.id} className='col-md-4'>
            <UserItem user={user} />
          </div>
        ))}
      </div>
    );
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Users;
