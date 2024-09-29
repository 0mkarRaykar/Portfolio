import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

const allowedOrigins = [
  "https://portfolio-md6i45k0j-omkar-raykars-projects.vercel.app",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true, // Allow cookies to be sent with requests
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes import
import contactRouter from "./routes/contactRoutes.js";

// Routes declaration
app.use("/contact", contactRouter);

export { app };
