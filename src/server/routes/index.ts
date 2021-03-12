import * as express from "express";

const router = express.Router();

router.get(
  "/api/hello",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.json("World");
  }
);

export default router;


