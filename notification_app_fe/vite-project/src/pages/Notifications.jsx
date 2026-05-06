import { useEffect, useState } from "react"

import {
  Container,
  Typography,
  Select,
  MenuItem
} from "@mui/material"

import NotificationCard
from "../components/NotificationCard"

import {
  fetchNotifications
} from "../api/notificationApi"

const Notifications = () => {

  const [notifications,
    setNotifications] = useState([])

  const [type,
    setType] = useState("")

  useEffect(() => {

    loadNotifications()

  }, [type])

  const loadNotifications = async () => {

    const data =
      await fetchNotifications(
        1,
        10,
        type
      )

    setNotifications(data)

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

        All Notifications

      </Typography>

      <Select
        value={type}
        onChange={(e) =>
          setType(e.target.value)
        }
        sx={{
          marginBottom: 2
        }}
      >

        <MenuItem value="">
          All
        </MenuItem>

        <MenuItem value="Placement">
          Placement
        </MenuItem>

        <MenuItem value="Result">
          Result
        </MenuItem>

        <MenuItem value="Event">
          Event
        </MenuItem>

      </Select>

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

export default Notifications