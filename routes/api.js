const express = require("express")
const router = express.Router()
const Laureate = require("../models/laureates")

/* GET home page. */
router.get("/", (req, res) => {
    res.json({ response: "Welcome to this API" })
})

router.get("/api/laureates/:bornCity", async (req, res) => {
    const searchTerm = req.params.bornCity

    try {
        const allLaureates = await Laureate.find({
            bornCity: searchTerm
        })
        res.status(200).send(allLaureates)
    } catch (error) {
        res.send(error)
    }
})

router.post("/api/laureates/", async (req, res) => {
    const newLaureate = new Laureate(req.body)

    try {
        await newLaureate.save()
        res.send(newLaureate)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router
