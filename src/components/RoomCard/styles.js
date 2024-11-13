// src/components/styles.js
import styled from "styled-components";

// Переопределяем SPACING внутри этого файла
const SPACING = {
  cardPadding: "10px 0",
};

export const RoomList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column; // Карточки будут располагаться по вертикали
  gap: ${SPACING.cardPadding};
  justify-content: flex-start;
  width: 100%;
  padding: ${SPACING.cardPadding};
`;

export const RoomCardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: ${SPACING.cardPadding};
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  h3 {
    font-size: 1.5em;

    color: #333;
  }
`;

export const RoomInfo = styled.p`
  font-size: 0.9em;
  color: #666;
  margin: 5px 0;
`;

export const RoomCardButton = styled.button`
  background-color: ${(props) => (props.isJoined ? "#4CAF50" : "#008CBA")};
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.isJoined ? "#45a049" : "#005f73")};
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const RoomHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
