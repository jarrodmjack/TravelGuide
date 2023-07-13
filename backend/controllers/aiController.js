const { Configuration, OpenAIApi } = require("openai")
const axios = require("axios")
const Country = require("../models/countryModel")
require("dotenv").config()

const fetchPhoto = async () => {
	try {
		const response = await axios.get(
			"https://api.unsplash.com/photos/random",
			{
				params: {
					query: "canada",
					client_id: process.env.UNSPLASH_API_ACCESS_KEY,
				},
			}
		)
		return response.data.urls.full
	} catch (e) {
		console.log(e)
	}
}

const sendPrompt = async (req, res) => {
	console.log(req.body)


	const { countryPrompt } = req.body
	const textPrompt = `Please make two bullet lists. The first list will be called "Items to bring to ${countryPrompt}". The second list will be called "Travel advisories/advice for ${countryPrompt}". For each advisory, do a sub explaination of what the risk is. The first list should be a bullet list of items that will be necessary to bring (e.g. Sunscreen, phone, camera, passport etc) and the second list should be any travel advice/advisories specifically for ${countryPrompt}`

	setTimeout(() => {
		res.status(200).json({msg: 'success'})
	}, 2500)

	return
	// const apiKey = process.env.OPENAI_API_KEY
	// const config = new Configuration({
	// 	apiKey: apiKey,
	// })

	// const openai = new OpenAIApi(config)
	// const { countryPrompt } = req.body

	// try {
	// 	const country = await Country.findOne({ name: countryPrompt })
	// 	// const imageUrl = await fetchPhoto()
	// 	if (country) {
	// 		console.log('here 1')
	// 		res.status(200).json(country)
	// 		return
	// 	} else {
	// 		console.log('Fetch AI data and save to database')
    //         res.status(200).json({msg: 'Successfully fetched AI data and saved country to database'})
	// 		// const completion = await openai.createCompletion({
	// 		// 	model: "text-davinci-003",
	// 		// 	max_tokens: 1000,
	// 		// 	temperature: 0,
	// 		// 	prompt: textPrompt,
	// 		// })

	// 		// const newCountry = await Country.create({
	// 		// 	imageUrl: "teasdasdsad",
	// 		// 	name: prompt,
	// 		// 	travelAdvisories: ["this is a test"],
	// 		// 	neededTravelItems: ["this is a test"],
	// 		// })
	// 		// console.log('new country: ', newCountry)
	// 		// // console.log("completion: ", completion.data.choices[0].text)
	// 		// res.status(200).json({
	// 		// 	msg: "successfully added to database",
	// 		// 	// data: newCountry,
	// 		// })
	// 	}
	// } catch (e) {
	// 	console.log(e)
	// 	res.status(400).json({ msg: e })
	// }
}

module.exports = { sendPrompt }
