import React, { FormEvent } from 'react';
import SearchInput from './search-input';

interface SearchProps {
  submitSearch: () => void;
  updateQuery: (args: string) => void;
}

class Search extends React.Component<SearchProps> {
  public formHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.submitSearch();
  }

  public render () {
    return (
    <form onSubmit={this.formHandler}>
      <div className="search_wrapper">
          <SearchInput updateQuery={this.props.updateQuery} />
          <button className="button is-primary is-rounded" type="submit" value="Submit">Search</button>
      </div>
    </form>
    )
  }
}

export default Search;