// src/components/RoomFilter.js
import React, { useState } from 'react';
import { FilterBar, SearchInput, Select, CreateRoomButton } from './styles';

const RoomFilter = ({ onFilterChange, onSortChange }) => {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('price');

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    onFilterChange(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    onSortChange(e.target.value);
  };

  return (
    <FilterBar>
      <SearchInput
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search rooms..."
      />
      <Select value={sortBy} onChange={handleSortChange}>
        <option value="price">Price</option>
        <option value="playerCount">Player Count</option>
        <option value="dateTime">Date & Time</option>
      </Select>
      <CreateRoomButton>Create Room</CreateRoomButton>
    </FilterBar>
  );
};

export default RoomFilter;
