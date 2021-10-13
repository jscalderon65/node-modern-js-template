import express from "express";
import cors from "cors";
import exampleRoutes from "./Routes/example.routes.js";
const app = express();

const PORT = process.env.PORT || 3000;

app.set("port", PORT);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/", exampleRoutes);

export default app;
