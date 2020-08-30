import React from "react";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
  return (
    <div className='card mt-3 p-3'>
      <div className='car-body text-left'>
        <a
          target='_blank'
          style={{ color: "white" }}
          rel='noopener noreferrer'
          href={repo.html_url}>
          {repo.name}
        </a>
      </div>
    </div>
  );
};

RepoItem.prototype = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
