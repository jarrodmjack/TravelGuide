const { Configuration, OpenAIApi } = require("openai")

const getHome = async (req, res) => {
	try {
		console.log("HIT HOME ROUTE")
		res.status(200).json({ message: "this is the home data at route /" })
	} catch (err) {
		res.json(err)
	}
}

const sendPrompt = async (req, res) => {
	console.log('HIT ENDPOINT')
	const config = new Configuration({
		apiKey: "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",
	})

	const openai = new OpenAIApi(config)
	const { prompt } = req.body

	try {
		const completion = await openai.createCompletion({
			model: "text-davinci-003",
			max_tokens: 512,
			temperature: 0,
			prompt: prompt,
		})
		console.log('completion: ', completion.data.choices[0].text)
		res.status(200).json({ msg: "success" })
	} catch (e) {
		console.log(e)
		res.status(400).json({ msg: e })
	}

}

module.exports = { getHome, sendPrompt }
