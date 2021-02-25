/** @jsx jsx */
import { jsx, Text } from 'theme-ui';

import StyledLink from "./styled-link";

const listStyle = {
  listStyle: 'none', 
  pl: '0px'
}

const itemStyle = {
  position: 'relative',
  ml:'0px',
  mb: [2,3],
  borderRadius: '8px',
  border: '2px solid transparent',
  transition: 'border 0.2s ease-in-out, transform 0.2s ease-in-out, background 0.2s ease-in-out',
  '& > a': {
    textDecoration: 'none',
    color: 'text',
    display: 'inline-block',
    px: 3,
    py: 2,
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    top: '0px',
    bottom: '0px',
    left: '0px',
    width: '100%',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(137, 84, 168, 0.16), 0px 2px 4px rgba(102, 51, 153, 0.08)',
    opacity: 0,
    transition: 'opacity 0.2s ease-in-out',
    pointerEvents: 'none',
  },
  '&:hover': {
    bg: 'purple5',
    border: (theme) => `2px solid ${theme.colors.purple20}`,
    transform: 'translateX(5px)',
    cursor: 'pointer',
    '&:before': {
      opacity: 1,
    },
    '& > a > h3:before': {
      opacity: 0
    }
  }
}

const titleStyle = {
  position: 'relative',
  '&:before': {
    content: '""',
    width: '16px',
    height: '1px',
    bg: 'purple30',
    position: 'absolute',
    left: '-30px',
    top: '36px',
    transition: 'opacity 0.2s ease-in-out'
  }
}

const overlineStyle = {
  color: 'purple50',
  textTransform: 'uppercase',
  fontSize: 2,
  fontWeight: 'medium',
  display: 'block'
}

const TutorialList = ({ posts }) => {
  return (
    <ul sx={listStyle}>
      {posts.map((post) => (
        <li sx={itemStyle}>
          <StyledLink to={post.slug}>
            <Text as="h3" variant="h3" sx={titleStyle}>
              <span sx={overlineStyle}>{post.frontmatter.eyebrow}</span>
              {post.frontmatter.title}
            </Text>
            <p sx={{mt: 1, mb: 0, color: 'textMedium'}}>{post.frontmatter.description} &rarr;</p>
          </StyledLink>
        </li>
      ))}
    </ul>
  );
};

export default TutorialList;
