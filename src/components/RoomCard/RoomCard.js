// src/components/RoomCard.js
import React, { useState } from "react";
import {
  RoomCardContainer,
  RoomCardButton,
  RoomInfo,
  RoomHeader,
} from "./styles";

// Компонент для отображения заголовка комнаты
const RoomTitle = ({ name }) => <h3>{name}</h3>;

// Компонент для отображения информации о комнате
const RoomDetails = ({ label, value }) => (
  <RoomInfo>
    <strong>{label}:</strong> {value}
  </RoomInfo>
);

const RoomCard = ({ room }) => {
  const [isJoined, setIsJoined] = useState(false);

  const handleJoinClick = () => {
    setIsJoined(true);
  };

  return (
    <RoomCardContainer>
      <RoomTitle name={room.name} />
      <RoomDetails label="Location" value={room.location} />
      <RoomDetails label="Players" value={`${room.playerCount}/18`} />
      <RoomDetails label="Date & Time" value={room.dateTime} />
      <RoomDetails label="Organization" value={room.organization} />
      <RoomDetails label="Price" value={`$${room.price}`} />
      <RoomCardButton onClick={handleJoinClick} isJoined={isJoined}>
        {isJoined ? "Joined" : "Join"}
      </RoomCardButton>
    </RoomCardContainer>
  );
};

export default RoomCard;
