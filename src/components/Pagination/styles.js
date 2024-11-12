// src/components/PaginationStyles.js
import styled from 'styled-components';

export const PaginationContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const PageButton = styled.button`
  padding: 10px 15px;
  margin: 0 5px;
  cursor: pointer;
  background-color: #ddd;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:hover {
    background-color: #bbb;
  }

  &.active {
    background-color: #f39c12;
    color: white;
  }
`;
