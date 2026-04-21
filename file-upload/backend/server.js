import { createApp } from "./src/app";
import { connectDB } from "./src/shared/db/db";

async function start() {
    try {
        const port = process.env.PORT;
        const uri = process.env.MONGO_URI;

        await connectDB(uri);
        const app = createApp();
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
}

start();

// import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
// import {getSignedUrl} from "@aws-sdk/s3-request-presigner";
// import { v4 as uuidv4 } from 'uuid';


// Initialize the S3 client with credentials and region
// const client = new S3Client({ region: process.env.AWS_REGION,
//     credentials:{
//         accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//         secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
//     }
// });

// const createPresignedUrlWithClient = ({ bucket, key }) => {
//     const command = new PutObjectCommand({ Bucket: bucket, Key: key });
//     return getSignedUrl(client, command, { expiresIn: 3600 });
// };


// app.post("/getPresignedUrl", async (req, res) => {
//     const { mime} = req.body;
//     // get presigned url from s3 and send it to client
//     const filename = uuidv4();
//     const finalName = `${filename}.${mime}`;
//     const url = await createPresignedUrlWithClient({ bucket: "file-upload-chaicode", key: finalName});
//     res.status(200).json({
//         url: url,
//         finalName: finalName
//     })
// })


// app.post("/products", (req, res)=> {

//     // get data from req.body and save it to database (we will do it later)
//     const {name, description, price, filename} = req.body;

//     res.status(200).json({
//         message: "This is the products endpoint"
//     })
// })



// app.get("/", (req, res) => {
//     res.send("Hello World!")
// })

// app.listen(port, () => {
//     console.log(`App listening on port ${port}`)
// })