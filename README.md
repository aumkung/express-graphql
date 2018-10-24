# Express grapql

Graphql with Express js

## Basic lib Install

* [Express js](https://www.npmjs.com/package/express) - Express js
* [Express Graphql](https://www.npmjs.com/package/express-graphql) - Express-Graphql
* [Graphql](https://www.npmjs.com/package/graphql) - Graphql
* [Nodemon](https://www.npmjs.com/package/nodemon) - Nodemon เอาไว้ auto run เวลา save ทุกครั้ง

## Example Express Config
```
const express = require('express')
const app = express()
const port = 3000

app.get('/hello', (req, res) => {
    res.json({ data: 'Hello' })
})

app.get('/world', (req, res) => {
    res.json({ data: 'world!!!' })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
```

