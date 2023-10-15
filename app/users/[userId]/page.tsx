import { Metadata } from "next";
import React from "react";

interface Props {
  params: {
    userId: number;
  };
}

const UserDetail = ({ params: { userId } }: Props) => {
  return (
    <div>
      UserDetail <b>{userId}</b>
    </div>
  );
};

export default UserDetail;

export async function generateMetadata(): Promise<Metadata> {
  const currentUser = await fetch("/api/users/1");
  return {
    title: "currentUser.name",
    description: "User Detail",
  };
}
