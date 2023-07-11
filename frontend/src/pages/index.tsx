import LogoutButton from "@/components/button/LogoutButton"
import Layout from "@/components/layout/Layout"
import axios from "axios"
import React, { FormEvent, useState } from "react"

const index = () => {
	const [prompt, setPrompt] = useState<string>()
	const [response, setResponse] = useState()

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()

		try {
			const res = await axios.post("http://localhost:4001/api/home", {
				prompt,
			})
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<Layout>
			<form onSubmit={(e) => handleSubmit(e)}>
				<input
					type="text"
					onChange={(e) => setPrompt(e.target.value)}
				/>
				<button type="submit">CLICK ME</button>
				<p>{response}</p>
			</form>
		</Layout>
	)
}

export default index
