## YouTube Video Downloader

This is a Node.js server application that allows users to download YouTube videos by providing a video URL and it also displays the video formats available for the video on the website.

### Libraries Used

- [Express.js](https://expressjs.com/) - A popular framework for building web applications in Node.js. It provides a simple and flexible way to handle HTTP requests and responses.

- [ytdl-core](https://www.npmjs.com/package/ytdl-core) - A library that allows you to easily download YouTube videos and extract video information.

- [ejs-locals](https://www.npmjs.com/package/ejs-locals) - An engine that allows you to use the EJS template language with the Express.js framework. EJS is a simple and popular templating language that allows you to embed JavaScript code in HTML.

### Installation

To install the dependencies, run:
```sh
npm install express ytdl-core ejs-locals

Code Structure
The code sets up several Express.js middleware functions to handle various aspects of the application.

app.engine('ejs', engine); and app.set('view engine', 'ejs'); are used to configure EJS as the templating engine for the application.
app.use('/public', express.static('public')); is used to serve static files from the 'public' directory.
app.set('views', 'views'); is used to specify the views directory for the application.
The code sets up two routes:

The root route ('/') is a GET route that renders the 'index.ejs' template when accessed.
The '/download' route is a GET route that accepts a query parameter 'url' which should be a YouTube video url. It extracts the video id from the url and uses the ytdl-core package to fetch video information. It then renders the 'download' template and passes the video url and the video information as local variables to the template.
Finally, the server listens on port 3000 or on the port specified by the environment variable PORT, and logs a message to the console when started.