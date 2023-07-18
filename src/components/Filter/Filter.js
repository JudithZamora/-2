import React from 'react';

const Filter = ({ filter, setFilter }) => {
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  
  return (
    <div>
      <label htmlFor="filter">Find contact by Name:</label>

      <input
        type="text"
        id="filter"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default Filter;
