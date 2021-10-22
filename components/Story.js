import React from 'react'

const Story = ({ img, username }) => {
	return (
		<div>
			<p>{username}</p>
			<img src={img} alt={username} />
		</div>
	)
}

export default Story
