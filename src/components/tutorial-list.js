/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby'

const listStyle = {
  listStyle: 'none', 
  pl: '0px'
}

const itemStyle = {
  pl: '0px',
  ml:'0px'
}

const TutorialList = ({ posts }) => {
  return (
    <ul sx={listStyle}>
      {posts.map((post) => (
        <li sx={itemStyle}>
          <h2><Link to={post.slug}>{post.frontmatter.eyebrow}: {post.frontmatter.title}</Link></h2>
          <p>{post.frontmatter.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default TutorialList;
