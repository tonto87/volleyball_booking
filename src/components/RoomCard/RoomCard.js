// src/components/RoomCard.js
import React from 'react';
import { RoomCardContainer, RoomCardButton } from './styles';

const RoomCard = ({ room }) => {
  return (
    <RoomCardContainer>
      <h3>{room.name}</h3>
      <p><strong>Location:</strong> {room.location}</p>
      <p><strong>Players:</strong> {room.playerCount}/18</p>
      <p><strong>Date & Time:</strong> {room.dateTime}</p>
      <p><strong>Organization:</strong> {room.organization}</p>
      <p><strong>Price:</strong> ${room.price}</p>
      <RoomCardButton>Join</RoomCardButton>
    </RoomCardContainer>
  );
};

export default RoomCard;
