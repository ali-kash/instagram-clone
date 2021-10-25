// import { getProviders, signIn } from 'next-auth/react'
import { getProviders, signIn as SignInProvider } from 'next-auth/client'
import Header from '../../components/Header'

// Browser...
function signin({ providers }) {
	return (
		<>
			<Header />
			<div className='flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center'>
				<img
					className='w-80'
					src='https://links.papareact.com/ocw'
					alt='instagram icon'
				/>
				<p className='font-xs italic'>
					This in <strong>NOT the real Instagram app</strong>, this has been
					built for educational purposes only.
				</p>

				<div className='mt-14'>
					{Object.values(providers).map((provider) => (
						<div key={provider.name}>
							<button
								className='p-3 bg-blue-500 rounded-lg text-white'
								onClick={() =>
									SignInProvider(provider.id, { callbackUrl: '/' })
								}
							>
								sign in with {provider.name}
							</button>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default signin

// Server side...
export async function getServerSideProps() {
	const providers = await getProviders()

	return {
		props: {
			providers,
		},
	}
}
