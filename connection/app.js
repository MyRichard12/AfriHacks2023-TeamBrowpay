import express from "express";
import cors from 'cors'
import 'dotenv/config.js'

const PORT = process.env.PORT || 9002;
const router = express.Router();

const app = express()

// handle the cors
const corsHandler = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    )
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );

    next();
}


// middlewares
app.use(express.json())
app.use(express.urlencoded())
app.use(corsHandler)
app.use(cors())

// Mount the router on the /api/v1 prefix
app.use('/api/v1', router);

router.get('/', async (req, res) => {
    res.status(200).send("Root route");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default router;
