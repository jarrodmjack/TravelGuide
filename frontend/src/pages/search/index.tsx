import SearchForm from "@/components/form/SearchForm"
import Layout from "@/components/layout/Layout"
import { countryList } from "@/utils/allCountriesList"
import axios from "axios"
import React from "react"

const SearchPage = () => {
	const handleSubmit = async (countryPrompt: string) => {
		let sanitzedCountryInput = `${countryPrompt[0].toUpperCase()}${countryPrompt
			.slice(1)
			.toLowerCase()}`

		if (!countryList.hasOwnProperty(sanitzedCountryInput)) {
			console.log("ERROR, NOT A COUNTRY")
			return
		} else {
			try {
				const res = await axios.post("http://localhost:4001/api/search", {
					prompt,
				})
                console.log('res: ', res)
			} catch (err) {
				console.log(err)
			}
		}
	}

	return (
		<Layout>
			<div className="flex justify-center">
				<div className="min-h-[500px] w-[300px] sm:min-h-[500px] sm:w-[450px] md:min-h-[800px] md:w-[800px] bg-tangerine border border-charcoal shadow-xl rounded-lg">
					<SearchForm handleSubmit={handleSubmit} />
				</div>
			</div>
		</Layout>
	)
}

export default SearchPage
