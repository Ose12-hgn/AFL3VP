import express from "express";
import { PORT } from "./utils/env-util";
import { publicRouter } from "./routes/publicApi";
import { errorMiddleware } from "./middlewares/error-middleware";
import { privateRouter } from "./routes/private-api";

const app = express()

app.use(express.json())
app.use("/api", publicRouter)
app.use("/api", privateRouter)
app.use(errorMiddleware) //Urutan penggunaan middleware error harus di paling akhir, supaya bisa menangkap error dari route sebelumnya.
//Kalau ada error di route sebelumnya, maka akan dilempar ke middleware ini untuk di proses dan ga ada error handling

app.listen(PORT || 3000, () => {
    console.log(`Connected to port ${PORT || 3000}`);
});