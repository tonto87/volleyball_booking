import React, { useState, useEffect } from "react";

const FilterBar = ({ roomsData, onFilterAndSort }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("priceAsc"); // добавляем начальное значение

  useEffect(() => {
    handleFilterAndSort();
  }, [searchQuery, sortOption]);

  const handleFilterAndSort = () => {
    const filtered = roomsData.filter(
      (room) =>
        room.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        room.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sortedRooms = [...filtered].sort((a, b) => {
      if (sortOption === "priceAsc") return a.price - b.price;
      if (sortOption === "priceDesc") return b.price - a.price;
      if (sortOption === "playerCountAsc") return a.playerCount - b.playerCount;
      if (sortOption === "playerCountDesc") return b.playerCount - a.playerCount;
      if (sortOption === "dateAsc") return new Date(a.dateTime) - new Date(b.dateTime);
      if (sortOption === "dateDesc") return new Date(b.dateTime) - new Date(a.dateTime);
      return 0;
    });

    onFilterAndSort(sortedRooms);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search rooms..."
      />
      <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
        <option value="priceAsc">By Lowest Price</option>
        <option value="priceDesc">By Highest Price</option>
        <option value="playerCountAsc">By Lowest Player Count</option>
        <option value="playerCountDesc">By Highest Player Count</option>
        <option value="dateAsc">By Earliest Date</option>
        <option value="dateDesc">By Latest Date</option>
      </select>
    </div>
  );
};

export default FilterBar;
