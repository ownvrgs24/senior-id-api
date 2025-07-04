import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import router from "./routes/index";

// Load environment variables from .env file
dotenv.config();

// Check if the PORT environment variable is set
if (!process.env.PORT) {
    process.exit(1);
}

// Parse the PORT environment variable
const PORT = Number.parseInt(process.env.PORT as string, 10);

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use("/uploads", express.static("uploads"));

app.use("/api", router);

app.listen(PORT, () => {
    console.log(`Server is up and running at: http://localhost:${PORT}/api`);
});
