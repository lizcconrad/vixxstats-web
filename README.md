# vixxstats
web app to view VIXX video statistics

- [React Frontend](#react-frontend)
- [Server](#server)
    - [Mongoose Models](#mongoose-models)
        - [Channel](#channel)
        - [Channel_stat](#channel_stat)
        - [Video](#video)
        - [Video_stat](#video_stat)
    - [TypeDefs](#typedefs)
    - [Resolvers](#resolvers)
    - [How to add a GraphQL query](#how-to-add-a-graphql-query)

## Server

### Mongoose Models
These represent the schema of each collection in the Mongo database

#### `Channel`
Model for the collection that stores information about a YouTube channel

```js
const Channel = mongoose.model("Channel", {
    channel_id: String,
    channel_title: String,
    uploads_id: String,
    publish_date: String,
    check_for_uploads: Boolean
});
```

#### `Channel_stat`
Model for the collection that stores channel statistic entries

```js
const Channel_stat = mongoose.model("Channel_stat", {
    title: String,
    channel_id: String,
    videoCount: Number,
    subscriberCount: Number,
    viewCount: Number,
    datetime_recorded: String
});
```

#### `Video`
Model for the collection that stores information about a YouTube video

```js
const Video = mongoose.model("Video", {
    channel_id: String,
    channel_title: String,
    tags: [String],
    title: String,
    upload_date: String,
    video_id: String
});
```

#### `Video_stat`
Model for the collection that stores video statistics entries

```js
const Video_stat = mongoose.model("Video_stat", {
    title: String,
    video_id: String,
    viewCount: Number,
    likeCount: Number,
    dislikeCount: Number,
    commentCount: Number,
    datetime_recorded: String
});
```


### TypeDefs
These are the type definitions that GraphQL uses to build its schema (along with the [resolvers](#resolvers)). The types mirror those in the Mongoose models with the addition of queries that are used to query the database.

The queries are as follows:
```js
// Given a video_id and a tag, return a list of documents of type Video_stat
getVideoStats(video_id: String, tag: String): [Video_stat]
```


### Resolvers
Resolvers tell the GraphQL server how to perform the queries in the typeDefs. In this case, we use mongoose to perform the queries.


### How to add a GraphQL query
1. Add a typeDef
2. Add a resolver
3. When using the query use this format to declare it in the component:
```js
const QUERY_NAME = gql`
  query($argument_to_send: DataType) {
    typeDefQueryName(query_param: $argument_to_send) {
      field_to_return
    }
  }
`;
```
4. Then use it like this:
```js
const { data, loading, error } = useQuery(QUERY_NAME, {variables: { query_param: 'argument' }});

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  let dataRaw = data['typeDefQueryName'];
```




## React Frontend
