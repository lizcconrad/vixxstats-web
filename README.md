## MERN Boilerplate

This is a simple fullstack boilerplate for a MERN project. The frontend is an unedited react app. The backend is a node server that uses express. the `index.js` in the outermost directory is the server, and it also has code to include GraphQL yoga and mongoose, but those can be removed.

The `package.json` file in the `client` folder has a script, `dev` that will run the react app and node server in tandem.


There is also configuration code that allows for extremely easy deployment to Heroku. Using [this](https://coursework.vschool.io/deploying-mern-with-heroku/) guide, you can easily deploy any fullstack MERN app to Heroku, but this boilerplate has the majority of the configuration done, all that's needed is creating the app and connecting it to a git repo on the Heroku website.

One last note is that the current server code connects mongoose to `process.env.MONGODB_URI`. When deployed to Heroku using mlabs, this is the default variable for the production database. In order to develop on a local machine, you'll need a `.env` file with either the URI for the Heroku instance, localhost, or any other mongo instance you're connecting to.


happy coding 🤖 01110101 01110111 01110101
