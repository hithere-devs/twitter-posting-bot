# Twitter Posting Bot

This project is a Twitter Posting Bot built with Node.js and Express. It allows
you to post tweets to Twitter using the Twitter API.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Error Handling](#error-handling)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [License](#license)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/twitter-posting-bot.git
   cd twitter-posting-bot
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add your Twitter API
   credentials:

   ```env
   AUTHORIZATION=your_twitter_api_bearer_token
   COOKIE=your_twitter_api_cookie
   PORT=3000
   ```

4. Build the project:
   ```sh
   npm run build
   ```

## Usage

Start the server:

```sh
npm start
```

For development, you can use:

```sh
npm run dev
```

## Endpoints

### Health Check

- **GET** `/health/`
  - Response: `{ status: 'Server is running smoothly' }`

### Post Tweet

- **POST** `/tweet/post`
  - Request Body: `{ text: 'Your tweet text' }`
  - Response: `{ status: 'text', response: response.data }`

## Error Handling

The project uses a custom error handling middleware to standardize error
responses. Errors are logged to the console and a JSON response is sent with the
error details.

## Environment Variables

- `AUTHORIZATION`: Your Twitter API Bearer Token.
- `COOKIE`: Your Twitter API Cookie.
- `PORT`: The port on which the server will run (default is 3000).

## Scripts

- `start`: Runs the built server.
- `dev`: Runs the server in development mode with `nodemon`.
- `build`: Compiles the TypeScript code to JavaScript.

## License

This project is licensed under the ISC License.
