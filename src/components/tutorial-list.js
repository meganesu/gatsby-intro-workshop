import React from 'react'
import { Link } from 'gatsby'

const TutorialList = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <li>
          <h2><Link to={post.slug}>{post.frontmatter.title}</Link></h2>
          <p>{post.frontmatter.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default TutorialList;
