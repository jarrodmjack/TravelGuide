import React, { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import Link from "next/link"
import CustomVideo from "@/components/video/CustomVideo"

const signup = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const { signup, error } = useSignup()

	const handleSignup = async () => {
		await signup(email, password)
	}

	return (
		<section className="relative overflow-hidden bg-black text-white">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
				<div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700 absolute z-10 bg-lightCoal">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
							Sign up with TravelGuide free
						</h1>
						<form className="space-y-4 md:space-y-6" action="#">
							<div>
								<label
									htmlFor="email"
									className="block mb-2 text-sm font-medium text-gray-900"
								>
									Your email
								</label>
								<input
									onChange={(e) => setEmail(e.target.value)}
									value={email}
									type="email"
									name="email"
									id="email"
									className="border text-black font-semibold sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
									placeholder="name@company.com"
									required={true}
								/>
							</div>
							<div>
								<label
									htmlFor="password"
									className="block mb-2 text-sm font-medium text-gray-900"
								>
									Password
								</label>
								<input
									onChange={(e) =>
										setPassword(e.target.value)
									}
									value={password}
									type="password"
									name="password"
									id="password"
									placeholder="•••••••••••"
									className="border text-black font-semibold sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
									required={true}
								/>
							</div>
							<div className="flex justify-between">
								<span className="text-danger font-semibold">
									{error && error}
								</span>
							</div>
							<button
								onClick={(e) => {
									e.preventDefault()
									handleSignup()
								}}
								type="submit"
								className="w-full text-white bg-blush focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-blushDark transition ease-in"
							>
								Sign up
							</button>
							<p className="text-sm font-light text-gray-400">
								Already have an account?{" "}
								<Link
									className="font-medium text-gray-200 hover:underline "
									href="/login"
								>
									Sign in
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default signup
