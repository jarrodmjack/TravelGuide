import { useAuthContext } from "@/hooks/useAuthContext"
import Link from "next/link"
import React, { PropsWithChildren } from "react"

type LayoutOwnProps = {} & PropsWithChildren

const Layout: React.FC<LayoutOwnProps> = ({ children }) => {
	const { user } = useAuthContext()

	return (
		<main className="text-charcoal">
			<nav className="w-full md:px-60 bg-tangerine py-6">
				<div className="flex flex-wrap justify-between items-center max-w-screen-xl p-4">
					<Link href="/search">
					<span className="self-center text-2xl font-semibold whitespace-nowrap">
						TravelGuide
					</span>
					</Link>
					<button
						data-collapse-toggle="mega-menu-full"
						type="button"
						className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
						aria-controls="mega-menu-full"
						aria-expanded="false"
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-5 h-5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 17 14"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M1 1h15M1 7h15M1 13h15"
							/>
						</svg>
					</button>
					<div>
						<ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0">
							<li className="hover:underline hover:text-blush font-semibold">
								<a
									href="#"
									className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
									aria-current="page"
								>
									Home
								</a>
							</li>
							<li className="hover:underline hover:text-blush font-semibold">
								<a
									href="#"
									className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
								>
									Marketplace
								</a>
							</li>
							<li className="hover:underline hover:text-blush font-semibold">
								<a
									href="#"
									className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
								>
									Resources
								</a>
							</li>
							<li className="hover:underline hover:text-blush font-semibold">
								<a
									href="#"
									className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
								>
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div className="border-blush md:px-60 bg-lightOrange min-h-screen">
				{children}
			</div>
		</main>
	)
}

export default Layout
