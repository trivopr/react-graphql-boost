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

const Posts = [{
		id: '1',
		title: 'B.U.S.T.E.D (Everybody Loves Sunshine) (Busted)',
		content: "which is not supported and may encounter bugs or unexpected behavior",
		createdAt: '9/13/2018',
		author: '1',
	},
	{
		id: '2',
		title: 'Legend of Lizzie Borden, The',
		content: " Yarn supports the following semver rang",
		createdAt: '4/11/2018',
		author: '1',
	},
	{
		id: '3',
		title: 'Treasure of the Sierra Madre, The',
		content: " Yarn supports the following semver rang",
		createdAt: '3/3/2018',
		author: '1',
	},
	{
		id: '4',
		title: 'Citizen Koch',
		content: "which is not supported and may encounter bugs or unexpected behavior",
		createdAt: '6/7/2018',
		author: '2',
	},
	{
		id: '5',
		title: 'Eye of the Dolphin',
		content: "which is not supported and may encounter bugs or unexpected behavior",
		createdAt: '11/25/2018',
		author: '3',
	},
];

const Users = [{
		id: '1',
		name: 'lucas',
		email: 'lucas@gmail.com',
		age: 22,
	},
	{
		id: '2',
		name: 'Rocky',
		email: 'rocky@gmail.com',
		age: 24,
	},
	{
		id: '3',
		name: 'Lynda',
		email: 'lynda@gmail.com',
		age: 26,
	},
];

const typeDefs = `
	type Query {
		user(name: String!): [User!]!
		posts(txtSearch: String!): [Post!]!
		greeting(name: String!): String!
	}

	type User {
		id: ID!
		name: String!
		email: String!
		age: Int,
		posts: [Post!]
	}

	type Post {
		id: ID!
		title: String!
		createdAt: String!
		content: String!
		author: User!
	}
	  
`;

const resolvers = {
	Query: {
		user: (parent, args, context, info) => {
			return Users.filter((user) => {
				return user.name.toLowerCase().includes(args.name.toLowerCase());
			})
		},
		posts: (parent, args, context, info) => {
			let result = Posts.filter((post) => {
				let isTitleMatch = post.title.toLowerCase().includes(args.txtSearch.toLowerCase());
				let isContentMatch = post.content.toLowerCase().includes(args.txtSearch.toLowerCase());
				return isTitleMatch || isContentMatch;
			})

			return result;
		},
		greeting: (parent, args, context, info) => {
			return 'hello' + args.name;
		},
	},

	Post: {
		author: (parent, args, context, info) => {
			return Users.find((user) => {
				return user.id === parent.author;
			})
		}
	}
};

const server = new GraphQLServer({
	typeDefs,
	resolvers,
});

server.start(() => console.log('Server is running on:'));