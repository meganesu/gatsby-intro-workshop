/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from "gatsby";

const linkStyles = {
  color: 'purple60',
}

const activeStyle = {
  fontWeight: 'bold'
}

const StyledLink = ({to, children}) => (
  <Link activeStyle={activeStyle} sx={linkStyles} to={to}>{children}</Link>
)

export default StyledLink
