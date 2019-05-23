const mongoose = require("mongoose")
const Schema = mongoose.Schema

const LaureateSchema = new Schema({
    born: String,
    bornCity: String,
    bornCountry: String,
    bornCountrycode: String,
    died: String,
    diedCity: String,
    diedCountry: String,
    diedCountrycode: String,
    firstname: String,
    gender: String,
    prizes: [
        {
            affiliations: [
                {
                    city: String,
                    country: String,
                    name: String
                }
            ],
            category: String,
            movitvation: String,
            share: String,
            year: String
        }
    ],
    surname: String
})

const Laureate = mongoose.model("Laureate", LaureateSchema)
module.exports = Laureate