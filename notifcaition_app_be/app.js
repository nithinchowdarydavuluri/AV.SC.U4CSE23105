const express = require("express")

const cors = require("cors")

const loggerMiddleware =require("./middleware/loggerMiddleware")

const notificationRoutes =require("./routers/notificationRoutes")

const app = express()

app.use(cors())

app.use(express.json())

app.use(loggerMiddleware)

app.use(
  "/api/notifications",
  notificationRoutes
)

app.get("/", (req, res) => {

  res.json({
    success: true,
    message: "Server Running"
  })

})

module.exports = app