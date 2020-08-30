import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='card mt-3'>
      <img className='card-img-top avatar' src={avatar_url} alt='avatar'></img>
      <div className='card-body'>
        <h5 className='card-title'>{login}</h5>
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm'>
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};
export default UserItem;
