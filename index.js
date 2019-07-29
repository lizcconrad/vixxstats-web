const { GraphQLServer } = require('graphql-yoga');
const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
require('dotenv').config();

// Connect to the MongoDB using either the Heroku URI or localhost
mongoose.connect(process.env.MONGODB_URI);


// SERVER CODE, SUCH AS MONGOOSE SCHEMAS AND GRAPHQL QUERIES


// create the server with the typeDef and resolver information
const server = new GraphQLServer({ typeDefs, resolvers });

// express.static is responsible for static file requests to the client
// when a request is made, it will now look in the build folder
server.express.use(express.static(path.join(__dirname, "client", "build")))

// send index.html if a request that isn't recognized is received
server.express.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


const port = process.env.PORT || 4000

const options = {
    port: port
    }
    
server.start(options, ({ port }) =>
    console.log(
        `Server started, listening on port ${port} for incoming requests.`,
    ),
);