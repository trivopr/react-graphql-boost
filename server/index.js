const express = require('express');
const mongoose = require('mongoose');

import {
	GraphQLServer
} from 'graphql-yoga';


require('dotenv').config({
	path: 'variables.env',
});

// const app = express();

// Connect Mongoose
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log('DB connected'))
	.catch(err => console.error(err));

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
// 	console.log(`Server running on port ${PORT}`);
// });

//========== Setup Graphql ================

// SCALAR TYPES: String Boollean Float Int ID

const typeDefs = `
	type Query {
		hello(name: String): String!
		add(a: Int, b: Int): Int!
	}

	type User {
		id: ID!
		name: String!
		email: String!
		age: Int
  	}
`

const resolvers = {
	Query: {
		hello: () => `Hello world`,
		add: (_, {
			a,
			b
		}) => {
			return a + b;
		}
	},
}

const server = new GraphQLServer({
	typeDefs,
	resolvers
});


server.start(() => console.log('Server is running on:'))