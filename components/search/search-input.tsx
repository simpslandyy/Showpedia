import React, { useState, ChangeEvent } from 'react';

interface SearchProps {
  updateQuery: (args: string) => void;
}

const SearchInput: React.FunctionComponent<SearchProps> = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    props.updateQuery(e.target.value)
  }

  return (
    <div className="search_bar_wrapper">
      <div className="field">
        <div className="control">
          <input 
          className="input is-rounded" 
          type="text" 
          placeholder="Search for show ..." 
          value={searchValue} 
          onChange={handleChange}>
          </input>
        </div>
      </div>
    </div>
  )
}

export default SearchInput;