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
        placeholder="What do you want to listen to today?"
        style={styles.searchInput}
      />
    </form>
  );
};

export default SearchBar;

const styles = {
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px',
    color: '#E7E3F1'
    
  },
  searchInput: {
    padding: '2.5%',
    width: '350px',
    // border: '1px solid #ccc',
    border: '1px solid #E7E3F1',
    borderRadius: '5px',
    outline: 'none',
    fontSize: '1em',
    background: 'transparent'
  },
};
