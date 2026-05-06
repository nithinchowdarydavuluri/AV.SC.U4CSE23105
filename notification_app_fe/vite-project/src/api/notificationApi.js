import axios from "axios"

const API =
  "http://20.207.122.201/evaluation-service/notifications"


const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJuaXRoaW5jaG93ZGFyeWRhdnVsdXJpMDVAZ21haWwuY29tIiwiZXhwIjoxNzc4MDY2MDUwLCJpYXQiOjE3NzgwNjUxNTAsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJiMTNhMTg5ZC03YTI1LTRkYWEtYWU3Mi04MjFkZTcxNjZhNDEiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJkYXZ1bHVyaSBuaXRoaW4gY2hvd2RhcnkiLCJzdWIiOiI4NTc2MTBhMi01YzUyLTRmNDgtODdlMy0wNGRmYjM1ZWVmNDIifSwiZW1haWwiOiJuaXRoaW5jaG93ZGFyeWRhdnVsdXJpMDVAZ21haWwuY29tIiwibmFtZSI6ImRhdnVsdXJpIG5pdGhpbiBjaG93ZGFyeSIsInJvbGxObyI6ImF2LnNjLnU0Y3NlMjMxMDUiLCJhY2Nlc3NDb2RlIjoiUFRCTW1RIiwiY2xpZW50SUQiOiI4NTc2MTBhMi01YzUyLTRmNDgtODdlMy0wNGRmYjM1ZWVmNDIiLCJjbGllbnRTZWNyZXQiOiJuRHN1QVhzc3dkc3FKY3NFIn0.PQYzyq3cPgNqISWX7auNuBsSPboC0UDXBFdGkpFcIT8"
export const fetchNotifications =
  async (
    page = 1,
    limit = 10,
    type = ""
  ) => {

    const response = await axios.get(API, {
      params: {
        page,
        limit,
        notification_type: type
      },
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    })

    return response.data.notifications

}