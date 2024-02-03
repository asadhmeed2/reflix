import React from "react";
import { User } from "./User";
import { Link } from "react-router-dom";

export const Users = ({ users }) => {
  return (
    <>
      <div className="users">
        {users.map((user) => (
          <Link key={user.id} to={`/home`}>
            <User user={user} />
          </Link>
        ))}
      </div>
    </>
  );
};
