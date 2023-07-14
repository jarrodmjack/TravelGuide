import { useRouter } from "next/router"
import React from "react"

const LoginButton = () => {
	const router = useRouter()

	const handleRedirectToLogin = () => {
		router.push("/login")
	}

	return (
		<button
        onClick={handleRedirectToLogin}
			type="button"
			className="bg-charcoal py-2 px-4 rounded-lg text-white hover:text-blush hover:bg-black transition ease-in"
		>
			Log in
		</button>
	)
}

export default LoginButton
