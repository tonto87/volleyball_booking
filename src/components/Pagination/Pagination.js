// src/components/Pagination.js
import React from 'react';
import { PaginationContainer, PageButton } from './styles';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <PaginationContainer>
      {pages.map((page) => (
        <PageButton
          key={page}
          className={currentPage === page ? 'active' : ''}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PageButton>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
