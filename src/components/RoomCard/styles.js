// src/components/RoomCardStyles.js
import styled from 'styled-components';

export const RoomCardContainer = styled.div`
  background-color: #fff;
  padding: 15px;
  margin: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
`;

export const RoomCardButton = styled.button`
  background-color: #f39c12;
  border: none;
  padding: 10px;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #e67e22;
  }
`;
