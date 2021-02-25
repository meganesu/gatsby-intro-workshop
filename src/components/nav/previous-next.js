/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

const linkStyle = {
  py: 12,
  px: 3,
  borderRadius: '8px',
  bg: 'purple5',
  border: (theme) => `1px solid ${theme.colors.purple20}`,
  display: 'inline-block',
  textDecoration: 'none',
  fontSize: 4,
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-3px)',
  }
}

const overlineStyle = {
  textTransform: 'uppercase',
  fontSize: 1,
  display: 'flex',
  color: 'grey50',
}

const textStyle = {
  fontWeight: 'bold',
  color: 'text',
  transition: 'color 0.2s ease-in-out',
  'a:hover &': {
    color: 'primary',
  }
}

const PreviousNext = ({prevTo, prevText, nextTo, nextText}) => (
  <div sx={{mt:[4,7]}}>
    <Link to={prevTo} sx={{...linkStyle, mr:2}}>
      <span sx={overlineStyle}>&larr; previous</span>
      <span sx={textStyle}>{prevText}</span>
    </Link>
    <Link to={nextTo} sx={linkStyle}>
      <span sx={overlineStyle}>next &rarr;</span>
      <span sx={textStyle}>{nextText}</span>
    </Link>
  </div>
)

export default PreviousNext