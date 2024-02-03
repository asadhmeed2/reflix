import React from "react";

export const Search = ({ onSearch }) => {
  return (
    <div>
      <input type="text" placeholder="Search" onChange={onSearch} />
    </div>
  );
};
