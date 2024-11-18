import { Request, Response, NextFunction } from 'express';
import axios from 'axios';

export const postTweet = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		// body which contains the text of the tweet
		const { text } = req.body;

		// preparing the data to be sent to the Twitter API
		const data = {
			text: 'So this is basically me again trying to test once!',
		};

		const { AUTHORIZATION, COOKIE } = process.env;

		// setting up the configuration for the request
		const config = {
			method: 'post',
			maxBodyLength: Infinity,
			url: 'https://api.twitter.com/2/tweets',
			headers: {
				'Content-Type': 'application/json',
				Authorization: AUTHORIZATION,
				Cookie: COOKIE,
			},
			data: data,
		};

		// // making the request to the Twitter API
		const response = await axios.request(config);

		// response from the Twitter API
		// {
		//       "data": {
		//         "id": "1848871876120240263",
		//         "text": "So this is basically me again trying to test once!",
		//         "edit_history_tweet_ids": [
		//           "1848871876120240263"
		//         ]
		//       }
		// }

		// {
		//     "data": {
		//         "id": "1741181645699366912",
		//         "name": "Azhar Mahmood",
		//         "username": "hithere_devs"
		//     }
		// }

		// Can't tweet the same tweet again and again
		res.status(201).json({ status: 'text', response: response.data });
	} catch (error) {
		next(error);
	}
};
