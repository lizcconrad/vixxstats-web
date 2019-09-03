import mongoose from 'mongoose';

export const Video = mongoose.model("V ideo", {
    channel_id: String,
    channel_title: String,
    tags: [String],
    title: String,
    upload_date: String,
    video_id: String
});
