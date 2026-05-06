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

# Stage 2

# Database Design
MongoDB is chosen for storing notifications because it is flexible, scalable, and works well for handling large amounts of  data.
# Notification Schema
{
   userId: String,
   type: String,
   title: String,
   message: String,
   isRead: Boolean,
}
# Sample MongoDB Document
json
{
  "userId": "101",
  "type": "Placement",
  "title": "Placement Drive",
  "message": "tomorrow",
  "isRead": false,
}
# Possible Problems as Data Increases
* Slow query performance
* Large database size
* High server load
# Solutions
* Use pagination with page and limit.
* Archive old notifications.
* Use caching for frequently accessed data.

# MongoDB Queries
## Get All Notifications
db.notifications.find({
   userId: "101"
})
## Get Unread Notifications
db.notifications.find({
   userId: "101",
   isRead: false
})

MongoDB provides a scalable and flexible solution for storing notifications. Using indexing, pagination, and caching helps improve performance as the number of notifications grows.

# Stage 3

## Existing Query

sql
SELECT * FROM notifications
WHERE studentID = 1042
AND isRead = false
ORDER BY createdAt ASC;

# Problems in the Query
* "SELECT *" fetches all columns unnecessarily
* Without indexes, the database performs a full table scan
* Sorting large data using "ORDER BY" becomes slow
# Improved Query
sql
SELECT id, notificationType, message, createdAt
FROM notifications
WHERE studentID = 1042
AND isRead = false
ORDER BY createdAt DESC;
# Query to Find Students Who Got Placement Notifications in Last 7 Days
sql
SELECT DISTINCT studentID
FROM notifications
WHERE notificationType = 'Placement'
AND createdAt >= NOW()  INTERVAL 7 DAY;

* The main reason for slow performance is missing indexes and unnecessary data fetching. Using optimized queries and composite indexes improves scalability and response time for large notification systems.

# Stage 4

# Performance Improvement
Fetching notifications on every page load increases database load and slows down the application.
# Problems
* High database traffic
*  Slow API response
* Poor user experience
# Solutions
## 1. Pagination
Use "page` and "limit" to fetch notifications in small batches.
### Benefit
* Reduces server load
* Faster response time
## 2. Redis Caching
Store frequently used notifications in Redis.
### Benefit
* Reduces database queries
* Improves speed
## 3. Socket.IO
Use real-time updates instead of fetching notifications repeatedly.
## 4. Lazy Loading
Load notifications only when needed.

# Approach
Use:
* Pagination
* Redis caching
* Socket.IO
Using caching, pagination, and real-time updates helps reduce database load and improves notification system performance