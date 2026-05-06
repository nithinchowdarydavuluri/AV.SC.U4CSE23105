import { useEffect, useState }
from "react"

import {
  Container,
  Typography
} from "@mui/material"

import NotificationCard
from "../components/NotificationCard"

import {
  fetchNotifications
} from "../api/notificationApi"

const Priority = () => {

  const [notifications,
    setNotifications] = useState([])

  useEffect(() => {

    loadPriorityNotifications()

  }, [])

  const loadPriorityNotifications =
    async () => {

      const data =
        await fetchNotifications()

      const priorityWeights = {
        Placement: 30,
        Result: 20,
        Event: 10
      }

      const scored =
        data.map((notification) => {

          return {
            ...notification,
            score:
              priorityWeights[
                notification.Type
              ] || 0
          }

        })

      scored.sort((a, b) => {
        return b.score - a.score
      })

      setNotifications(
        scored.slice(0, 10)
      )

  }

  return (

    <Container>

      <Typography
        variant="h4"
        sx={{
          marginTop: 2,
          marginBottom: 2
        }}
      >

        Priority Notifications

      </Typography>

      {
        notifications.map(
          (notification) => (

            <NotificationCard
              key={notification.ID}
              notification={notification}
            />

          )
        )
      }

    </Container>

  )

}

export default Priority