import { useSession, signIn } from 'next-auth/client'

import Head from 'next/head'
import Header from '../components/Header'
import Feed from '../components/Feed'
import Modal from '../components/Modal'

export default function Home() {
	const [session, loading] = useSession()

	return (
		<div className='bg-gray-50 h-screen overflow-y-scroll scrollbar-hide'>
			<Head>
				<title>Instagram App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />

			{loading ? null : !session ? <Feed /> : <Feed />}

			<Modal />
		</div>
	)
}
