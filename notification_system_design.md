# Stage 1

# Notification System API Design
## Introduction
The notification system is used to send important updates related to placements, results, and events to students after login. The APIs are designed using REST principles for easy frontend integration.

# Authentication
All APIs are protected using JWT tokens.

## Headers

"http,
Authorization: Bearer <token>
Content-Type: application/json"

# Notification Schema

json
{
  "_id": "1",
  "userId": "101",
  "type": "Placement",
  "title": "Placement ",
  "message": "tomorrow",
}

# APIs
## 1. Get All Notifications
"http
GET /api/notifications?page=1&limit=10&type=Placement"

### Response

json
{
  "success": true,
  "notifications": []
}
## 2. Get Unread Notifications

http
GET /api/notifications/unread

## 3. Mark Notification as Read
"http
PATCH /api/notifications/:id/read
"
## 4. Mark All Notifications as Read

"http
PATCH /api/notifications/read-all"

# Error Response

json
{
  "success": false,
  "message": "Something went wrong"
}
---
# Database Choice
MongoDB is used because it is scalable and suitable for handling large notification data.
# Real-Time Notifications
Socket.IO is used for real-time notification updates.
# Conclusion
The designed system supports secure APIs, pagination, unread tracking, filtering, and real-time notifications with a scalable backend architecture.

