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
