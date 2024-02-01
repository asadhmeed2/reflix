import React from "react";

const USERS = [
  { id: "1", name: "John" },
  { id: "2", name: "Asaad" },
  { id: "3", name: "John Dow" },
];

export const Landing = () => {
  return (
    <>
      {USERS.map((user) => (
        <div>{user.name}</div>
      ))}
    </>
  );
};
