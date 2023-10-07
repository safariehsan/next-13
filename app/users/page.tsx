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
      <b>Users Page:</b>
      <hr />
      <p>{new Date().toLocaleTimeString()}</p>
      <hr />
      <UserTable sortOrder={sortOrder} />
    </div>
  );
};

export default UsersPage;
