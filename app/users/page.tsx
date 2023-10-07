import React from "react";
import UserTable from "./UserTable";

interface Props {
  searchParams: {
    sortOrder: string;
  };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  console.log(sortOrder);
  return (
    <div>
      <h1>Users Page:</h1>
      <hr />
      <p>{new Date().toLocaleTimeString()}</p>
      <hr />
      <UserTable sortOrder={sortOrder} />
    </div>
  );
};

export default UsersPage;
