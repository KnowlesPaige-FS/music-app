import React, { useState } from 'react';

const SearchBar = props => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      props.onSearch(query);
    }
  };

  return (
    <form className="search-bar" style={styles.searchBar} onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Search..."
        style={styles.searchInput}
      />
    </form>
  );
};

export default SearchBar;

const styles = {
  searchBar: {
    
  },
  searchInput: {
    
  },
};
