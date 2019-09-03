import { Video } from "./models";

export const resolvers = {
    Query: {
        getVideos: () => Video.find()
    }
}