import * as express from "express";
import apiRouter from "./routes";

const app = express();

app.use(express.static("public"));

app.use(apiRouter);

const port = 3000;

app.listen(port, () => console.log(`Server listening on port ${port}`));


