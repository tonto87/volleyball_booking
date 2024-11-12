// src/components/RoomFilterStyles.js
import styled from 'styled-components';

export const FilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  font-size: 1rem;
  width: 300px;
`;

export const Select = styled.select`
  padding: 10px;
  font-size: 1rem;
`;

export const CreateRoomButton = styled.button`
  background-color: #2ecc71;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
`;
