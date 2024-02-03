import React from "react";
import { randomColor } from "./Utils";

export const User = ({ user }) => {
  return (
    <div className="user" style={{ backgroundColor: randomColor() }}>
      {user.name}
    </div>
  );
};
