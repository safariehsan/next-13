import React from "react";
import UserTable from "./UserTable";

const UsersPage = async () => {
  return (
    <div>
      <b>Users Page:</b>
      <hr />
      <p>{new Date().toLocaleTimeString()}</p>
      <hr />
      <UserTable />
    </div>
  );
};

export default UsersPage;
