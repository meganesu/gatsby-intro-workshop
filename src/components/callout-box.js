/** @jsx jsx */
import { jsx } from 'theme-ui';

const calloutStyle = {
  px: 3,
  py: 2,
  my: 2,
  border: '1px solid',
  borderColor: 'purple20',
  borderRadius: '8px',
  bg: 'purple5',
  display: 'flex',
  fontSize: 2
}

const iconStyles = {
  fill: 'purple60',
  bg: 'purple20',
  borderRadius: '10px',
  boxShadow: (theme) => `0 0 0 1px ${theme.colors.purple20}`,
  flex: '0 0 16px',
  mr: 1,
  mt: 0
}

const CalloutBox = ({children}) => (
	<div sx={calloutStyle}>
    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24" sx={iconStyles} aria-hidden="true"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
		{children} 
	</div>
)

export default CalloutBox