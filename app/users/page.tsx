import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

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
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <UserTable sortOrder={sortOrder} />
    </div>
  );
};

export default UsersPage;
