# ReactJS-Developers-Exercise-API

Basic NodeJS REST API that writes objects to a mongo db and connect with a third-party service

- express
- mongoose
- babel-cli
- Async/Await

# Installation

Clone the repository and run `npm install`

```
git clone https://github.com/askochypets/ReactJS-Developers-Exercise-API.git
npm install
```

# Starting the server

```
npm start
```

The server will run on port 3001. You can change this by editing `config.dev.js` file.

# Build Docker image

```
npm run build
```

After npm building the project, go to project root directory, open shell and run:

```
docker build -t express-server .
```
