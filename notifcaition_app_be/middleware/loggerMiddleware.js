const Log = require("../utils/logger")

const loggerMiddleware = async (
  req,
  res,
  next
) => {

  await Log(
    "backend",
    "info",
    "middleware",
    `${req.method} ${req.url} called`
  )

  next()

}

module.exports = loggerMiddleware