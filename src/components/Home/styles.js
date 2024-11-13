// src/components/HomeStyles.js
import styled from "styled-components";

// Основные переменные стилей
const COLORS = {
  background: "#333",
  text: "white",
  buttonPrimary: "#008CBA",
  buttonHover: "#005f73",
  buttonActive: "#0077B6",
};

const SPACING = {
  padding: "20px",
  headerPadding: "50px 0",
  gap: "20px",
  cardPadding: "20px",
};

const SIZES = {
  maxWidth: "800px",
  cardWidth: "300px", // фиксированная ширина карточки
};

// Основной контейнер страницы
export const HomeContainer = styled.div`
  padding: ${SPACING.padding};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${SPACING.gap};
`;

// Обложка/заголовок страницы
export const Cover = styled.header`
  background-color: ${COLORS.background};
  color: ${COLORS.text};
  text-align: center;
  padding: ${SPACING.headerPadding};
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  h1 {
    font-size: 2em;
    margin: 0.5em 0;
  }

  p {
    font-size: 1.2em;
    opacity: 0.8;
  }
`;

// Список комнат, расположение карточек
export const RoomList = styled.div`
  display: flex;
  flex-wrap: wrap; // карточки могут переноситься на следующую строку
  // gap: ${SPACING.gap};
  justify-content: center;
  width: 100%;
  margin-top: 30px;
  align-items: center;
  @media (max-width: 768px) {
    justify-content: center;
  }

  > div {
    width: 50%;
    margin: 10px;
  }
`;
