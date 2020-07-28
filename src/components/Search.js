import React from "react";

const Search = () => {
  return (
    <div className='card bg-dark'>
      <div className='card-body'>
        <form>
          <div className='form-group'>
            <input type='text' className='form-control' />
          </div>

          <div className='form-group'>
            <button type='submit' className='form-control btn btn-secondary'>
              Search
            </button>
          </div>
          <div className='form-group'>
            <button type='button' className='form-control btn btn-info'>
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
