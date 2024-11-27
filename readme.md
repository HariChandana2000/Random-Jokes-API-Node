# Random Jokes API

## Description

This project is a simple Node.js API that serves random jokes by fetching them from a third-party API. The API has one endpoint `/api/jokes/random` that returns a random joke from the Official Joke API.

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/HariChandana2000/Random-Jokes-API-Node.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Random-Jokes-API-Node
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

## Running the Server

Start the server by running:

```bash
node index.js
```

The server will start on port 3000 (or the port specified in the environment variables).

## API Endpoints

### GET /api/jokes/random

Returns a random joke fetched from the Official Joke API.

#### Example Response

```json
{
  "id": 100,
  "type": "general",
  "setup": "Why did the scarecrow win an award?",
  "punchline": "Because he was outstanding in his field!"
}
```
