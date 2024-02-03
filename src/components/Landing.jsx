import React from "react";
import { Users } from "./Users";
import { Layout } from "./Layout";

const USERS = [
  { id: "1", name: "John" },
  { id: "2", name: "Asaad" },
  { id: "3", name: "John Dow" },
];

export const Landing = () => {
  return (
    <Layout>
      <div className="landing">
        <div className="landing-message">WHO'S WATCHING?</div>
        <Users users={USERS} />
      </div>
    </Layout>
  );
};
