import axios from "axios"
import React, { useState } from "react"
import LoadingSpinner from "../loader/LoadingSpinner"

type AiResponseBoxOwnProps = {
	countryName: string
}

const AiResponseBox: React.FC<AiResponseBoxOwnProps> = ({ countryName }) => {
	const [responseLoading, setResponseLoading] = useState<boolean>(false)
	const [response, setResponse] = useState()

	const handleSubmit = async () => {
		setResponseLoading(true)
		try {
			const res = await axios.post(
				`${process.env.NEXT_PUBLIC_API_URL}/api/search`,
				{
					countryPrompt: countryName,
				}
			)
            console.log('res: ', res)
			setResponse(res.data)
			setResponseLoading(false)
		} catch (err) {
			console.log(err)
			setResponseLoading(false)
		}
	}

	return (
		<div>
			<button
				onClick={handleSubmit}
				className="text-white bg-blush py-2 px-6 rounded-lg"
			>
				Ask the travel guide!
			</button>
            {responseLoading && <LoadingSpinner />}
			{response &&!responseLoading && <div>ALL RESPONSE DATA</div>}
		</div>
	)
}

export default AiResponseBox
