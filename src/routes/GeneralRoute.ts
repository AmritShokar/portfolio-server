import { Router } from "express"

let router = Router();

router.get("/time", (req,res) => {
    return res.status(200);
});

export = router;