import express from "express";
import cors from "cors";
import timelineRoutes from "./routes/timeline-routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", timelineRoutes);

export default app;