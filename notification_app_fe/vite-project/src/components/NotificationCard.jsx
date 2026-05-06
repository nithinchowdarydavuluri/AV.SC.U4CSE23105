import {
  Card,
  CardContent,
  Typography,
  Chip
} from "@mui/material"

const NotificationCard = ({
  notification
}) => {

  return (

    <Card
      sx={{
        marginBottom: 2
      }}
    >

      <CardContent>

        <Typography variant="h6">

          {notification.Type}

        </Typography>

        <Typography>

          {notification.Message}

        </Typography>

        <Chip
          label={notification.Type}
          sx={{
            marginTop: 1
          }}
        />

      </CardContent>

    </Card>

  )

}

export default NotificationCard