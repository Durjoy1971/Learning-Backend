# Getting Started

## Initialize npm package
To initialize a new npm package, run the following command:
```sh
npm init
```

## Run a JavaScript file
To execute a JavaScript file using Node.js, use the following command:
```sh
node file_name.js
```
## To minimize it in package.json
```sh
  "scripts": {
    "start": "node index.js"
  },
```
Now, run `npm run start`

## Install Express.js
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

## Install dotenv
To install dotenv, run the following command:
```sh
npm install dotenv
```

