import React from "react";

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users = await res.json();
  return (
    <div>
      <b>Users Page:</b>
      <hr />
      <p>{new Date().toLocaleTimeString()}</p>
      <hr />
      <ul>
        {users.map((item: IUser) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
