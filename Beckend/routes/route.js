import express from "express";
import { addFood, listfood, removeFood } from "../controllers/Controller.js"; // Ensure this function exists
import multer from "multer";

const foodRouter = express.Router();

// Image Storage

const Storage = multer.diskStorage({
    destination: `/uploads`,
    filename: (req, file, cb) => {
        // Use backticks for string interpolation
        cb(null, `${Date.now()}${file.originalname}`);
    }
});

const upload = multer({ storage: Storage }); // Corrected: `storage` instead of `Storage`

// Define valid routes with paths and handlers
foodRouter.post("/add", upload.single("image"), addFood); // Corrected upload parameter
foodRouter.get("/list", listfood);
foodRouter.post("/remove", removeFood);

export default foodRouter;
