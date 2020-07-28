import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ searchUsers, clearUsers, showClearButton }) => {
  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    searchUsers(text);
    setText("");
  };

  return (
    <div className='card bg-dark'>
      <div className='card-body'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              name='text'
              className='form-control'
              placeholder='Enter a name'
              value={text}
              onChange={onChange}
            />
          </div>

          <div className='form-group'>
            <button type='submit' className='form-control btn btn-secondary'>
              Search
            </button>
          </div>
          {showClearButton && (
            <div className='form-group'>
              <button
                type='button'
                className='form-control btn btn-info'
                onClick={clearUsers}>
                Clear
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClearButton: PropTypes.bool.isRequired,
};
export default Search;
