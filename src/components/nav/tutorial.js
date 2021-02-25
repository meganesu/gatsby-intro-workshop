/** @jsx jsx */
import { jsx, Text } from 'theme-ui';
import { Link } from 'gatsby'

const navStyle = {
  fontSize: 2,
  ml: ['0px', 6],
  mt: [3, '0px'],
  flex: '0 0 33%',
  position: 'sticky',
  top: [4, 5, 8],
  alignSelf: 'flex-start',
  px: 3,
  pt: 2,
  pb: 1,
  bg: 'purple5',
  border: (theme) => `1px solid ${theme.colors.purple20}`,
  borderRadius: '8px',
}

const menuStyle = {
  p: '0px',
  m: '0px',
  listStyle: 'none',
  '& > li': {
    mb: 1,
  }
}

const headerStyle = {
  textTransform: 'uppercase',
  color: 'grey50',
  letterSpacing: 3,
  fontSize: 2,
  fontWeight: 'medium',
  mt: 2,
  mb: 1,
}

const linkStyle = {
  textDecoration: 'none',
  color: 'primary',
  transition: 'color 0.2s ease-in-out',
  '&:hover': {
    color: 'purple80',
  },
  '&.active': {
    fontWeight: 'bold',
    color: 'purple80',
    pl: 2,
    display: 'inline-block',
  }
}

const TutorialNav = () => (
  <div sx={navStyle}>
    <Link to="/" sx={{textDecoration: 'none', color: 'primary'}}>&larr; Go Home</Link>
    <Text sx={headerStyle}>Tutorial Lessons</Text>
    <ul sx={menuStyle}>
      <li><Link sx={linkStyle} activeClassName='active' to="/part-0"> Set up your development environment</Link></li>
      <li><Link sx={linkStyle} activeClassName='active' to="/part-1"> Create and deploy your first Gatsby site</Link></li>
      <li><Link sx={linkStyle} activeClassName='active' to="/part-2"> Use and style React components</Link></li>
      <li><Link sx={linkStyle} activeClassName='active' to="/part-3"> Add features with plugins</Link></li>
      <li><Link sx={linkStyle} activeClassName='active' to="/part-4"> Query for data with GraphQL</Link></li>
      <li><Link sx={linkStyle} activeClassName='active' to="/part-5"> Transform data to use Markdown</Link></li>
      <li><Link sx={linkStyle} activeClassName='active' to="/part-6"> Create pages programmatically</Link></li>
      <li><Link sx={linkStyle} activeClassName='active' to="/part-7"> Add dynamic images</Link></li>
    </ul>    
  </div>
)

export default TutorialNav