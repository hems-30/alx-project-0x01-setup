import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ id, name, username, email, address, phone, website, company }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm text-gray-600">@{username}</p>
      <p className="text-sm">{email}</p>
      <p className="text-sm">
        {address.suite}, {address.street}, {address.city}
      </p>
      <p className="text-sm">{phone}</p>
      <p className="text-sm text-blue-600 underline cursor-pointer">{website}</p>
      <p className="mt-2 text-sm font-medium">{company.name}</p>
      <p className="text-xs italic">{company.catchPhrase}</p>
    </div>
  );
};

export default UserCard;