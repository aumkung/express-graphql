const express = require('express')
const app = express()
const port = 3000
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const customer = require('./customer.json')
const home = require('./home.json')

// app.get('/hello', (req, res) => {
//     res.json({ data: 'Hello' })
// })

// app.get('/world', (req, res) => {
//     res.json({ data: 'world!!!' })
// })

// const schema = buildSchema(`
//     type Query {
//         hello: String
//         world: String
//     }
// `)

// const resolver = {
//     hello() {
//         return 'Hello'
//     },
//     world() {
//         return 'World'
//     }
// }
console.log(home.data)
const schema = buildSchema(`
    type Query {
        customers: [Customer]
        customer(id: ID!): Customer
        homes: [Home]
        home(id: ID!): Home
    }

    type Customer {
        id: Int
        firstName: String
        lastName: String
        email: String
        gender: String
        ip_address: String
    }

    type Home {
        id: Int
        title: String
        type: String
        position: Int
        created_at: String
    }
`)
const resolver = {
    customers: () => customer,
    customer: (args) => customer.find(c => c.id == args.id),
    homes: () => home.data,
    home: (args) => home.data.find(h => h.id == args.id)
}

app.use(graphqlHTTP({
    schema,
    rootValue: resolver,
    graphiql: true
}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))