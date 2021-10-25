import NextAuth from 'next-auth'
import { session, signIn } from 'next-auth/client'
// import GoogleProvider from 'next-auth/providers/google'
import Providers from 'next-auth/providers'

export default NextAuth({
	providers: [
		Providers.Google({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],

	pages: {
		signIn: '/auth/signin',
	},
	callbacks: {
		async session(session, token, user) {
			session.user.username = session.user.name
				.split(' ')
				.join('')
				.toLocaleLowerCase()

			session.user.uid = token.sub
			return session
		},
	},
})
