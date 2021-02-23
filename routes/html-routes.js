const router   = require("express").Router();
const { model } = require("mongoose");
const path = require("path");

router.get("/", () => {
    res.sendFile(path.join(_dirname, "../public/index.html"));
});

router.get("/index", () => {
    res.sendFile(path.join(_dirname, "../public/index.html"));
});

router.get("/exercise", () => {
    res.sendFile(path.join(_dirname, "../public/exercise.html"));
});

router.get("/stats", () => {
    res.sendFile(path.join(_dirname, "../public/stats.html"));
});

module.exports = router;