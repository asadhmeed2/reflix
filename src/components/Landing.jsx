import React from "react";
import { Users } from "./Users";

const USERS = [
  { id: "1", name: "John" },
  { id: "2", name: "Asaad" },
  { id: "3", name: "John Dow" },
];

export const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-message">WHO'S WATCHING?</div>
      <Users users={USERS} />
    </div>
  );
};
