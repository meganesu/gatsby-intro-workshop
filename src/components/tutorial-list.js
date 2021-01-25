import React from "react";

const TutorialList = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <li>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default TutorialList;
