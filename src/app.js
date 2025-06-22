import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';


const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN, // Default to localhost if not set
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
}))

app.use(express.json({limit:"16kb"})); // Middleware to parse JSON bodies

app.use(express.urlencoded({ extended: true, limit: "16kb" })); // Middleware to parse URL-encoded bodies

app.use(express.static("public")); // Middleware to serve static files from the "public" directory

app.use(cookieParser()); // Middleware to parse cookies

export default { app }; // Exporting the app instance for use in other modules