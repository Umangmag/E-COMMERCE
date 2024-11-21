const express = require('express');
const mongoose = require ('mongoose');

const cookieParser= require('cookie-parser');
//  A middleware library to parse cookies from incoming HTTP requests.

const cors = require('cors');
// : A middleware library to enable Cross-Origin Resource Sharing (CORS). Your e-commerce app may have a frontend hosted on a different domain or port than the backend server. cors allows the backend to handle requests from such different origins securely, ensuring smooth communication between the client and server.

// create a database connection -> u can also 
// create a seperate file for this and then import/use that file here 

mongoose.connect("mongodb+srv://agarwalumangg:EaseKart9304%40@easekart.jhi5c.mongodb.net/")
.then(()=>console.log('MongoDB connected'))
.catch((error)=>console.log(error));

// it will return a promise when promise is resolved then the connection of this server is successful with the database

const app = express();
const PORT= process.env.PORT || 5000;

app.use(
    cors({
        origin: "http://localhost:5173",
        //Allows requests only from the specified origin (in this case, the frontend hosted locally on port 5173).

        methods: ["GET", "POST", "DELETE", "PUT"],
        //Specifies the allowed HTTP methods for cross-origin requests. Only GET, POST, DELETE, and PUT requests are permitted.

        allowedHeaders: [ // // Lists the headers the client can include in its requests
            "Content-Type", // For specifying the content format (e.g., JSON).
            "Authorization", // For sending authentication tokens.
            "Cache-Control", // For controlling cache-related behavior.
            "Expires",       // For controlling cache-related behavior.
            "Pragma",       // For controlling cache-related behavior.
        ], 
        credentials: true,   // Allows cookies, authentication headers, or other credentials to be sent with cross-origin requests. This is essential for maintaining user sessions or handling secure requests.
    })
);

//app.use telling to mount middleware functions that we going to write after it
// for cors:




