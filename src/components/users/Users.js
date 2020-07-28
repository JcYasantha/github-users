import React from "react";
import UserItem from "./UserItem";
import Loading from "../Loading";

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

export default Users;
