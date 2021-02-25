/** @jsx jsx */
import { jsx, Text } from 'theme-ui';

const bodyStyles = {
  fontFamily: 'body',
}

const titleStyles = {
  mt:'0',
  mb: [4,5,7],
  pb: [2,3],
  borderBottom: (theme) => `1px solid ${theme.colors.grey30}`,
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
}
  
const eyebrowStyles = {
  color: 'primary',
  display: 'inline-block',
  textTransform: 'uppercase',
  fontSize: 2,
  fontWeight: 'medium',
  bg: 'purple5',
  letterSpacing: 2,
  mb: 1,
  py: 0,
  px: 2,
  borderRadius: '20px',
  border: (theme) => `1px solid ${theme.colors.purple30}`,
  boxShadow: (theme) => `0 0 0 2px ${theme.colors.purple20}`,
}

const Layout = ({ children, pageContext }) => (
  <div sx={bodyStyles}>
    <main>
      <title>{pageContext.frontmatter.title}</title>
      
      <Text variant="h1" as="h1" sx={titleStyles}><span sx={eyebrowStyles}>{pageContext.frontmatter.eyebrow}</span>{pageContext.frontmatter.title}</Text>
      {children}
    </main>
    <footer>
      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </footer>
  </div>
);

export default Layout;
