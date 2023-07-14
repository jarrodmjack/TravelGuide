import Layout from "@/components/layout/Layout"
import { useAuthContext } from "@/hooks/useAuthContext"
import { useRouter } from "next/router"
import React from "react"

const index = () => {


	const { user } = useAuthContext()
	const router = useRouter()


	if (user) {
		router.push('/countries')
	}

	
	return (
		<Layout>
			<section className="text-white">
				<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
					<div className="bg-gray-50 border-2 border-charcoal rounded-lg p-8 md:p-12 mb-8 bg-blush">
						<h1 className="text-gray-900text-3xl md:text-5xl font-extrabold mb-2">
							TravelGuide Country Directory
						</h1>
						<p className="text-lg font-normal text-gray-500 mb-6">
							Use TravelGuide to check travel advisories for
							specific countries, find general information about a
							country, as well as have a travel checklist/packing
							list created just for you,{" "}
							<span className="font-bold">powered by AI</span>.
						</p>
						<a
							href="/login"
							className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-charcoal hover:bg-black transition ease-in hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
						>
							Try it now
						</a>
					</div>
					<div className="grid md:grid-cols-2 gap-8">
						<div className="bg-gray-50 border-2 border-charcoal rounded-lg p-8 md:p-12 bg-blush flex flex-col justify-evenly">
							<a
								href="/login"
								className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2"
							>
								<svg
									className="w-2.5 h-2.5 mr-1.5"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 18 18"
								>
									<path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
								</svg>
								Data
							</a>
							<h2 className="text-gray-900 text-3xl font-extrabold mb-2">
								Where does the data come from?
							</h2>
							<p className="text-lg font-normal text-gray-500 mb-4">
								- All in-built travel advisory data comes from{" "}
								<a
									href="https://www.travel-advisory.info/data-api"
									target="_blank"
									className="text-charcoal underline font-bold cursor-pointer"
								>
									https://www.travel-advisory.info/data-api
								</a>
								<div></div>- All country data comes from{" "}
								<a
									href="https://restcountries.com/"
									target="_blank"
									className="text-charcoal underline font-bold cursor-pointer"
								>
									https://restcountries.com/
								</a>
							</p>
						</div>
						<div className="bg-gray-50 border-2 border-charcoal rounded-lg p-8 md:p-12 bg-blush flex flex-col justify-evenly">
							<a
								target="_blank"
								href="https://github.com/jarrodmjack"
								className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2"
							>
								<svg
									className="w-2.5 h-2.5 mr-1.5"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 20 16"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
									/>
								</svg>
								Code
							</a>
							<h2 className="text-gray-900 text-3xl font-extrabold mb-2">
								View my other projects
							</h2>
							<p className="text-lg font-normal text-gray-500 mb-4">
								I have a bunch of open source projects on my
								Github. Feel free to click the link below to
								have a look
							</p>
							<a
								href="https://github.com/jarrodmjack/TravelGuide"
								className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
							>
								Github repo
								<svg
									className="w-3.5 h-3.5 ml-2"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 14 10"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M1 5h12m0 0L9 1m4 4L9 9"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default index
