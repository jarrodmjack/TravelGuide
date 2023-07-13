import AiResponseBox from "@/components/AI/AiResponseBox"
import Layout from "@/components/layout/Layout"
import { AdvisoryDataObject } from "@/types/AdvisoryDataObject"
import { countryList } from "@/utils/allCountriesList"
import axios from "axios"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"

const IndividualSearchResults = () => {
	const router = useRouter()
	const [advisoryDataLoading, setAdvisoryDataLoading] =
		useState<boolean>(false)
	const [advisoryData, setAdvisoryData] = useState<AdvisoryDataObject | null>(
		null
	)
  const [countryName, setCountryName] = useState<string>("")

	useEffect(() => {
		// const fetchTravelAdvisoryInformation = async () => {
			if (!router.query.id) {
				return
			}
      setCountryName(router.query.id as string)
		// 	setAdvisoryDataLoading(true)
		// 	try {
		// 		type Country = keyof typeof countryList
		// 		const countryName: Country = router.query.id as string
		// 		const countryCode: string | undefined = countryList[countryName]

		// 		const res = await axios.get(
		// 			`https://www.travel-advisory.info/api?countrycode=${countryCode}`
		// 		)

		// 		setAdvisoryData(res.data.data[countryCode].advisory)
		// 		setAdvisoryDataLoading(false)
		// 	} catch (e) {
		// 		console.log(e)
		// 		setAdvisoryDataLoading(false)
		// 	}
		// }

		// fetchTravelAdvisoryInformation()
	}, [router])

	// https://www.travel-advisory.info/api?countrycode=AU
	console.log(advisoryData)
	return (
		<Layout>
			<div className="h-screen mt-20 px-40">
				{advisoryDataLoading ? (
					<span>Loading</span>
				) : (
					<div className="flex gap-10">
						<div className="flex flex-col bg-white border rounded-lg shadow-lg w-1/2">
              <span>THIS IS WHERE THE ADVISORY DATA GOES</span>
							{/* <span>message: {advisoryData!.message}</span>
							<span>score: {advisoryData!.score}</span>
							<span>updated: {advisoryData!.updated}</span> */}
						</div>
						<div className="w-1/2 bg-white border rounded-lg p-10">
              <h2>Click the button below for a list of items to pack, more in-depth advisories and some great tourist destinations to go within {countryName}! All information is generated by AI.</h2>
              <AiResponseBox countryName={countryName} />
            </div>
					</div>
				)}
			</div>
		</Layout>
	)
}

export default IndividualSearchResults