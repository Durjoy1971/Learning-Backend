# Chapter-01 - Introduction to Backend Development

### Initialize npm package

To initialize a new npm package, run the following command:

```sh
npm init
```

### Run a JavaScript file

To execute a JavaScript file using Node.js, use the following command:

```sh
node file_name.js
```

### To minimize it in package.json

```sh
  "scripts": {
    "start": "node index.js"
  },
```

Now, run `npm run start`

### Install Express.js

To install Express.js, run the following command:

```sh
npm install express
```

Then, create a simple Express.js server with the following code:

```js
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

### Install dotenv

To install dotenv, run the following command:

```sh
npm install dotenv
```

## Summary Notes

To use environment variables in your application, require and configure dotenv at the beginning of your file:

```js
require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
```

Make sure to create a `.env` file in your project root with the following content:

```
PORT=3000 # or any other port you want to use
```

## Chapter-02 - Fullstack Proxy and CORS

### Using ES Modules

To use ES modules, you can write your Express.js server as follows:

```js
// This is known as module JavaScript. For that, we need to add `"type": "module"` in `package.json`.

import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

// Get a list of 5 jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Joke 1",
      content: "This is joke 1",
    },
    {
      id: 2,
      title: "Joke 2",
      content: "This is joke 2",
    },
    {
      id: 3,
      title: "Joke 3",
      content: "This is joke 3",
    },
    {
      id: 4,
      title: "Joke 4",
      content: "This is joke 4",
    },
    {
      id: 5,
      title: "Joke 5",
      content: "This is joke 5",
    },
  ];
  res.json(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
```

You can use this for better view of JSON file: [JSON Formatter](https://jsonformatter.org/).

### Using Proxy with Vite

To configure a proxy with Vite to avoid CORS, you can use the following setup:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
  plugins: [react()],
});
```

### To install React With Vite

To create a new React project with Vite, run the following command:

```sh
npm create vite@latest
```

### To install Axios

To install Axios, run the following command:

```sh
npm i axios
```

### Example React Component

Here is an example of a React component that fetches and displays jokes from the server:

```jsx
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <h1> Hi I am Frontend</h1>
      <p> Number of Jokes: {jokes.length}</p>
      {jokes.map((joke) => {
        return (
          <div key={joke.id}>
            <h2 style={{ color: "greenyellow" }}>{joke.title}</h2>
            <p>{joke.content}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
```
