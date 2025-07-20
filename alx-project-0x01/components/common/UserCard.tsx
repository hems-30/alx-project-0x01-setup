import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <h2 className="text-lg font-semibold">{user.name}</h2>
      <p className="text-sm text-gray-600">@{user.username}</p>
      <p className="text-sm">{user.email}</p>
      <p className="text-sm">
        {user.address.suite}, {user.address.street}, {user.address.city}
      </p>
      <p className="text-sm">{user.phone}</p>
      <p className="text-sm text-blue-600 underline cursor-pointer">{user.website}</p>
      <p className="mt-2 text-sm font-medium">{user.company.name}</p>
      <p className="text-xs italic">{user.company.catchPhrase}</p>
    </div>
  );
};

export default UserCard;