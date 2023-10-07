import React from "react";

interface Props {
  params: {
    userId: number;
    photoId: number;
  };
}

const PhotoDetail = ({ params: { userId, photoId } }: Props) => {
  return (
    <div>
      User <b>{userId}</b> / Photo <b>{photoId}</b>
    </div>
  );
};

export default PhotoDetail;
