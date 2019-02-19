const express = require('express');
const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');

import { GraphQLServer } from 'graphql-yoga';
import { split } from 'apollo-link';
import db from './db';
import Query from '../server/resolvers/Query';
import Mutation from '../server/resolvers/Mutation';
import Post from '../server/resolvers/Post';
import Comment from '../server/resolvers/Comment';
import User from '../server/resolvers/User';

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

const resolvers = {
	Query,
	Mutation,
	Post,
	Comment,
	User,
};

const server = new GraphQLServer({
	typeDefs: './server/schema.graphql',
	resolvers,
	context: {
		db,
	},
});

server.start(() => console.log(`Server is running on 4000`));
