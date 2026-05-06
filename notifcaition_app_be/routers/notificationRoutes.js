const express = require("express")

const router = express.Router()

const {
  getPriorityNotifications
} = require(
  "../controllers/notificationController"
)

router.get(
  "/priority",
  getPriorityNotifications
)

module.exports = router