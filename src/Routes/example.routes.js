const express = require("express");
const router = express.Router();
import { helloWorld } from "../Services/example.services";

router.get("/", helloWorld);

export default router;
