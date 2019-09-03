import { GraphQLServer } from 'graphql-yoga';
import mongoose from 'mongoose';
import { typeDefs } from './server/typeDefs';
import { resolvers } from './server/resolvers';
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

// 1. MONGOOSE MODELS STORED IN "models.js", SAVE MODEL HERE
// 2. ADD NEW QUERIES IN THE TYPEDEF SCHEMA, INCLUDING THE TYPE
// 3. ADD RESOLVER

console.log("ye")

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => console.log('Server is running on localhost:4000'));
