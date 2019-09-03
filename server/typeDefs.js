// const { gql } = require('apollo-server-express');

export const typeDefs = `
    type Query {
        getVideos: [Video]
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
`;