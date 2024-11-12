// src/components/Home.js
import React, { useState } from 'react';
import RoomCard from '../RoomCard/RoomCard';
import RoomFilter from '../RoomFilter/RoomFilter';
import Pagination from '../Pagination/Pagination';
import { HomeContainer, Cover, RoomList } from './styles';

const roomsData = [
  { id: 1, name: 'Room 1', location: 'New York', playerCount: 8, dateTime: '2024-11-20 10:00 AM', organization: 'Org A', price: 50 },
  { id: 2, name: 'Room 2', location: 'Los Angeles', playerCount: 15, dateTime: '2024-11-22 2:00 PM', organization: 'Org B', price: 70 },
  { id: 3, name: 'Room 3', location: 'Chicago', playerCount: 12, dateTime: '2024-11-25 1:00 PM', organization: 'Org A', price: 60 },
  { id: 3, name: 'Room 3', location: 'Chicago', playerCount: 12, dateTime: '2024-11-25 1:00 PM', organization: 'Org A', price: 60 },
  { id: 3, name: 'Room 3', location: 'Chicago', playerCount: 12, dateTime: '2024-11-25 1:00 PM', organization: 'Org A', price: 60 },
  { id: 3, name: 'Room 3', location: 'Chicago', playerCount: 12, dateTime: '2024-11-25 1:00 PM', organization: 'Org A', price: 60 },
  { id: 3, name: 'Room 3', location: 'Chicago', playerCount: 12, dateTime: '2024-11-25 1:00 PM', organization: 'Org A', price: 60 },
  // More rooms...
];

const Home = () => {
  const [filteredRooms, setFilteredRooms] = useState(roomsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [roomsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('price');

  const handleFilterChange = (query) => {
    setSearchQuery(query);
    const filtered = roomsData.filter(
      (room) =>
        room.name.toLowerCase().includes(query.toLowerCase()) ||
        room.location.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRooms(filtered);
  };

  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
    const sortedRooms = [...filteredRooms].sort((a, b) => {
      if (sortOption === 'price') {
        return a.price - b.price;
      } else if (sortOption === 'playerCount') {
        return a.playerCount - b.playerCount;
      } else if (sortOption === 'dateTime') {
        return new Date(a.dateTime) - new Date(b.dateTime);
      }
      return 0;
    });
    setFilteredRooms(sortedRooms);
  };

  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  const currentRooms = filteredRooms.slice(indexOfFirstRoom, indexOfLastRoom);
  const totalPages = Math.ceil(filteredRooms.length / roomsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <HomeContainer>
      <Cover>
        <h1>Welcome to the Room Booking Platform</h1>
        <p>Find and book your next room today!</p>
      </Cover>
      <RoomFilter onFilterChange={handleFilterChange} onSortChange={handleSortChange} />
      <RoomList>
        {currentRooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </RoomList>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </HomeContainer>
  );
};

export default Home;
