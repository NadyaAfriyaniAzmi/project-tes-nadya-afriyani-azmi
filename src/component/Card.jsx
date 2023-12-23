import React from 'react';

const Card = ({ createdAt, title, smallImage }) => {
  return (
    <div className="w-70 bg-white border border-gray-200 rounded-lg shadow">
      <div className="flex flex-col h-full">
        <div>
          <img
            src={smallImage}
            alt=""
            className="rounded-t-lg w-full h-[300px] object-cover"
          />
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-500">{createdAt}</p>
          <p className="text-lg font-semibold">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
