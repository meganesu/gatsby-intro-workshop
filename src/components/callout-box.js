import React from 'react'

const CalloutBox = ({children}) => (
	<aside style={{
		backgroundColor: 'lightblue',
		padding: '0.5rem 1rem',
	}}>
		{children} 
	</aside>
)

export default CalloutBox