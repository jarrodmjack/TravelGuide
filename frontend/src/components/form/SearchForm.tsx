import React, { useState } from "react"

type SearchFormOwnProps = {
	handleSubmit: (prompt: string) => void
}

const SearchForm: React.FC<SearchFormOwnProps> = ({ handleSubmit }) => {
	const [prompt, setPrompt] = useState<string>()

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault()
				handleSubmit(prompt!)
			}}
		>
			<input
				type="text"
				required={true}
				onChange={(e) => setPrompt(e.target.value)}
			/>
			<button type="submit">CLICK ME</button>
		</form>
	)
}

export default SearchForm
