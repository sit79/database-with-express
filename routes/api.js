const express = require("express")
const router = express.Router()
const chalk = require("chalk")
const Laureate = require("../models/laureates")

/* GET home page. */
router.get("/", (req, res) => {
    res.json({ response: "Welcome to this API" })
})

router.get("/api/laureates", async (req, res) => {
    console.log(chalk.blue("request is being processed"))
    const allLaureates = await Laureate.find({
        bornCity: "Berlin",
        diedCity: "Berlin"
    })
    console.log(chalk.red(allLaureates.length))
    res.json(allLaureates)
})

module.exports = router
