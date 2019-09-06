const { GraphQLServer } = require('graphql-yoga');
const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
require('dotenv').config();


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

// 1. MONGOOSE MODELS STORED IN "models.js"
// 2. ADD NEW QUERIES IN THE TYPEDEF SCHEMA, INCLUDING THE TYPE
// 3. ADD RESOLVER

// MONGOOSE MODELS
// Model for the collection that stores information about a YouTube channel
const Channel = mongoose.model("Channel", {
    channel_id: String,
    channel_title: String,
    uploads_id: String,
    publish_date: String,
    check_for_uploads: Boolean
});

// Model for the collection that stores channel statistic entries
const Channel_stat = mongoose.model("Channel_stat", {
    title: String,
    channel_id: String,
    videoCount: Number,
    subscriberCount: Number,
    viewCount: Number,
    datetime_recorded: String
});

// Model for the collection that stores information about a YouTube video
const Video = mongoose.model("Video", {
    channel_id: String,
    channel_title: String,
    tags: [String],
    title: String,
    upload_date: String,
    video_id: String
});

// Model for the collection that stores video statistics entries
const Video_stat = mongoose.model("Video_stat", {
    title: String,
    video_id: String,
    viewCount: Number,
    likeCount: Number,
    dislikeCount: Number,
    commentCount: Number,
    datetime_recorded: String
});

// Type definitions for GraphQL schema
// Queries:
// getVideoStats(video_id, tag): Given a video_id and a tag, get the appropriate video_stats entries out of the video_stats collection
const typeDefs = `
    type Query {
        getVideoStats(video_id: String, tag: String): [Video_stat]
    }

    type Channel { 
        channel_id: String,
        channel_title: String,
        uploads_id: String,
        publish_date: String,
        check_for_uploads: Boolean
    }

    type Channel_stat {
        title: String,
        channel_id: String,
        videoCount: Int,
        subscriberCount: Int,
        viewCount: Int,
        datetime_recorded: String
    }

    type Video {
        id: ID!
        channel_id: String
        channel_title: String
        tags: [String]
        title: String
        upload_date: String
        video_id: String
    }

    type Video_stat {
        title: String,
        video_id: String,
        viewCount: Int,
        likeCount: Int,
        dislikeCount: Int,
        commentCount: Int,
        datetime_recorded: String
    }
`;

const resolvers = {
    Query: {
        getVideoStats: (_, { video_id, tag } ) => Video_stat.find({'video_id': video_id, 'tags': tag})
    }
};


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
