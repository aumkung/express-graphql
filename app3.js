const express = require('express')
const app = express()
const port = 3000
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const customer = require('./customer.json')

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

const schema = buildSchema(`
    type Query {
        customers: [Customer]
        customer(id: ID!): Customer
    }

    type Customer {
        id: Int
        firstName: String
        lastName: String
        email: String
        gender: String
        ip_address: String
    }
`)
const resolver = {
    customers() {
        return customer
    },
    customer(args) {
        return customer.find(c => c.id == args.id)
    }
}

app.use(graphqlHTTP({
    schema,
    rootValue: resolver,
    graphiql: true
}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))