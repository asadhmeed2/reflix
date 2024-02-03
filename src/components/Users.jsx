import React from "react";
import { User } from "./User";
import { Link } from "react-router-dom";

export const Users = ({ users }) => {
  return (
    <>
      <div className="users">
        {users.map((user) => (
          <Link className="user-link" key={user.id} to={`/catalog`}>
            <User user={user} />
          </Link>
        ))}
      </div>
    </>
  );
};
