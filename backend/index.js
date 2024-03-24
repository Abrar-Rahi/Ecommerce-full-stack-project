require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoConfig = require("./databaseConfig/mongoConfig")
const port = process.env.PORT
const app = express()
const route = require("./routes")
const path = require("path");

mongoConfig()
app.use(cors())
app.use(express.json())
app.use(route)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})