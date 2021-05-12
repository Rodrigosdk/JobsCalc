const express = require("express");

const pagesController = require("./controller/pages");

const router = express.Router();

router.get("/", pagesController.home);
router.get("/job", pagesController.jobs);
router.post("/job", (req,res) => console.log(req));
router.get("/job/edit", pagesController.jobsEdit);
router.get("/profile", pagesController.profile);

module.exports = router;
