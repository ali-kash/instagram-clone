import Post from './Post'

const posts = [
	{
		id: '123',
		username: 'itachi_uchiha',
		userImg: '/static/images/itachi-avatar.png',
		img: '/static/images/itachi-uchiha.jpg',
		caption: 'Itachi of the Sharingan',
	},
	{
		id: '1234',
		username: 'itachi_uchiha',
		userImg: '/static/images/itachi-avatar.png',
		img: '/static/images/itachi-uchiha.jpg',
		caption: 'Itachi of the Sharingan',
	},
]

const Posts = () => {
	return (
		<div>
			{}

			{posts.map((post) => (
				<Post
					key={post.id}
					id={post.id}
					username={post.username}
					userImg={post.userImg}
					img={post.img}
					caption={post.caption}
				/>
			))}
		</div>
	)
}

export default Posts
