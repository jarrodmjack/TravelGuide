import React from "react"
import { useRouter } from "next/router"
import { useLogout } from "@/hooks/useLogout"

const LogoutButton = () => {
	const { logout } = useLogout()

	return (
		<button
			onClick={logout}
			type="button"
			className="text-charcoal hover:text-blush hover:underline"
		>
			Log out
		</button>
	)
}

export default LogoutButton
