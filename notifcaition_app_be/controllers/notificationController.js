const axios = require("axios")

const Log = require("../utils/logger")

const getPriorityNotifications =
  async (req, res) => {

    try {

      const response = await axios.get(
        "http://20.207.122.201/evaluation-service/notifications",
        {
          headers: {
            Authorization:
              `Bearer ${process.env.ACCESS_TOKEN}`
          }
        }
      )

      const notifications =
        response.data.notifications

      const priorityWeights = {
        Placement: 30,
        Result: 20,
        Event: 10
      }

      const scoredNotifications =
        notifications.map((notification) => {

          let score = 0

          score +=
            priorityWeights[
              notification.Type
            ] || 0

          const currentTime =
            new Date()

          const notificationTime =
            new Date(
              notification.Timestamp
            )

          const diffMinutes =
            (currentTime -
              notificationTime)
            / (1000 * 60)

          if (diffMinutes <= 60) {

            score += 30

          }
          else if (
            diffMinutes <= 360
          ) {

            score += 20

          }
          else {

            score += 10

          }

          return {
            ...notification,
            priorityScore: score
          }

        })

      scoredNotifications.sort(
        (a, b) => {
          return (
            b.priorityScore -
            a.priorityScore
          )
        }
      )

      const top10 =
        scoredNotifications.slice(0, 10)

      await Log(
        "backend",
        "info",
        "controller",
        "Top notifications fetched"
      )

      res.status(200).json({
        success: true,
        total: top10.length,
        notifications: top10
      })

    }
    catch (error) {

      await Log(
        "backend",
        "error",
        "handler",
        error.message
      )

      res.status(500).json({
        success: false,
        message:
          "Error fetching notifications"
      })

    }

  }

module.exports = {
  getPriorityNotifications
}