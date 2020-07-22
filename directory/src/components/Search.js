import React from "react";


const Search = ({handleSearchChange}) => {   

    return (
        <div className="search">
          <form className="form">
            <input 
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={e => handleSearchChange(e)}
            />
          </form>
        </div>
      );
    }

export default Search;