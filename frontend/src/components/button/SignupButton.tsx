import { useRouter } from "next/router"
import React from "react"

const SignupButton = () => {
	const router = useRouter()

	const handleRedirectToSignup = () => {
		router.push("/signup")
	}

	return (
		<button
			onClick={handleRedirectToSignup}
			type="button"
			className="bg-charcoal py-2 px-4 rounded-lg text-white hover:text-blush hover:bg-black transition ease-in"
		>
			Sign up
		</button>
	)
}

export default SignupButton
