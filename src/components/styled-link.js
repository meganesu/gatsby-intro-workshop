/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from "gatsby";

const linkStyles = {
  color: 'purple60'
}

const StyledLink = ({to, children}) => (
  <Link sx={linkStyles} to={to}>{children}</Link>
)

export default StyledLink
