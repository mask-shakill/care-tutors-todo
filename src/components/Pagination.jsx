import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    return Array.from({ length: totalPages }, (_, index) => index + 1).map(
      (number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`px-3 py-1 mx-1 rounded-full ${
            number === currentPage
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          {number}
        </button>
      )
    );
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        className="px-3 py-1 mx-1 rounded-full bg-gray-200 text-black"
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        className="px-3 py-1 mx-1 rounded-full bg-gray-200 text-black"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
