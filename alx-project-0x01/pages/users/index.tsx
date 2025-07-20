import React from "react";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  posts: UserProps[]; // JSONPlaceholder returns users in 'posts' prop as per instructions
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </main>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;