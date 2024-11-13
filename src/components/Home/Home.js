// src/components/Home.js
import React, { useState } from "react";
import RoomCard from "../RoomCard/RoomCard";
import FilterBar from "../RoomFilter/FilterBar";
import Pagination from "../Pagination/Pagination";
import { HomeContainer, Cover, RoomList } from "./styles";

const roomsData = [
  {
    id: 1,
    name: "Room 1",
    location: "New York",
    playerCount: 8,
    dateTime: "2024-11-20 10:00 AM",
    organization: "Org A",
    price: 50,
  },
  {
    id: 2,
    name: "Room 2",
    location: "Los Angeles",
    playerCount: 15,
    dateTime: "2024-11-22 2:00 PM",
    organization: "Org B",
    price: 70,
  },
  {
    id: 3,
    name: "Room 3",
    location: "Chicago",
    playerCount: 12,
    dateTime: "2024-11-25 1:00 PM",
    organization: "Org A",
    price: 60,
  },
  {
    id: 4,
    name: "Room 4",
    location: "Chicago",
    playerCount: 12,
    dateTime: "2024-11-25 1:00 PM",
    organization: "Org A",
    price: 60,
  },
  {
    id: 5,
    name: "Room 5",
    location: "Chicago",
    playerCount: 12,
    dateTime: "2024-11-25 1:00 PM",
    organization: "Org A",
    price: 60,
  },
  {
    id: 6,
    name: "Room 6",
    location: "Chicago",
    playerCount: 12,
    dateTime: "2024-11-25 1:00 PM",
    organization: "Org A",
    price: 60,
  },
];

const Home = () => {
  const [filteredRooms, setFilteredRooms] = useState(roomsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [roomsPerPage] = useState(5);

  const handleFilterAndSort = (sortedAndFilteredRooms) => {
    setFilteredRooms(sortedAndFilteredRooms);
    setCurrentPage(1); // Сброс на первую страницу после фильтрации
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
      <FilterBar roomsData={roomsData} onFilterAndSort={handleFilterAndSort} />
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
