# 📱 Tasqly Mobile App — High-Level Screen Documentation

![alt text](logo.png)

This document describes all major screens in the Tasqly mobile application.
It focuses on user flow, purpose, and high-level functionality, without going into technical UI details yet.

## 1. Welcome & Authentication

### 1.1 Welcome Screen

A simple introductory screen presenting the Tasqly logo, slogan, and two primary actions:
- Sign In
- Create Account

This is the first screen users see when launching the app.

### 1.2 Sign In Screen

Users can log into their existing account using:
- 📧 Email & Password
- 🔑 Social Login (OAuth)
- Google
- Apple (iOS) (Future feature)
- Facebook (optional)

Includes:
- “Forgot Password”
- “Continue with Google / Apple” buttons
- Basic form validation

### 1.3 Sign Up Screen

New users can create an account via:
- Email, password, full name
- Social sign-up (Google / Apple)

Also includes:
- Selecting whether they are a Roommate/Tenant or Landlord
(user type determines available screens later)

### 1.4 Forgot Password Screen

Allows users to reset their password via email.

## 2. Home / Dashboard

### 2.1 Home Screen

The central screen of the app. Shows:
- Today’s tasks
- Upcoming recurring tasks
- New notifications
- Quick actions (Add Task, Add Repair Request)

This screen gives users an at-a-glance view of their responsibilities and what’s happening in the household.

## 3. Tasks

### 3.1 Task List Screen

A categorized view of all tasks:
- Assigned to Me
- Created by Me
- Updated by (optional)
- All Household Tasks
- Filters:
  - Recurring
  - Pending
  - In-Progress
  - Completed
  - Overdue

Each task card includes:
- Title
- Due date
- Assigned To
- Created by
- Updated by (optional)
- Created on
- Short Description
- Status

### 3.2 Create Task Screen

Allows creating a new chore/task with:
- Title
- Description
- Assign to (roommate or group)
- Due date
- Priority
- Recurring schedule options (daily, weekly, monthly, custom, none)
- Attachments (optional)

### 3.3 Task Details Screen

Full task view with:
- Status updates (“Pending”, “Accepted”, “In Progress”, “Completed”)
- Accept / Reject buttons (if assigned to user)
- Recurrence info
- Comments thread
- Description
- Activity log (e.g. “Emma completed this task”)
- Option to edit or delete (permissions apply)

## 4. Comments

### 4.1 Comments Thread Screen

Each task includes a comment section where users can:
- Post messages
- Reply to updates
- Upload pictures (if needed)
- View comment timestamps

This keeps all task communication in one place.

## 5. Repairs & Landlord Requests

### 5.1 Repair Requests List

Shows all maintenance or repair requests with status indicators:
- Submitted
- Received
- In progress
- Completed

Roommates can submit requests; landlords can update statuses.

### 5.2 Create Repair Request Screen

Fields include:
- Title
- Description
- Optional photos (S3 upload)
- Priority
- Category (Plumbing, Electrical, Appliance, Other)

### 5.3 Repair Details Screen

Shows:
- Status updates (controlled by landlord or tenant if allowed)
- Photo attachments
- Description
- Comments thread
- Activity log
- Timeline of updates

## 6. Backlog / Archive

### 6.1 Backlog Screen

A history view of:
- Completed tasks
- Resolved repair requests
- Past recurring instances

Includes filters by date, category, task type, or user.

## 7. Household & User Settings

### 7.1 Household Settings

Roommates can:
- Invite members
- View household name & details
- See list of all roommates
- Leave household (if needed)

Landlords can:
- See all tenant accounts connected to the unit

## 8. Household & User Settings

### 8.1 Household Settings

Roommates can:
- Invite members
- View household name & details
- See list of all roommates
- Leave household (if needed)

Landlords can:
- See all tenant accounts connected to the unit

### 8.2 Profile & App Settings

Users can:
- Edit name, photo, email
- Enable/disable notifications
- Change password
- View terms & privacy policy

## 9. Notifications

### 9.1 Notification Center

Displays system notifications such as:
- New tasks assigned
- Task accepted or rejected
- Tasks due soon
- Repairs updated by landlord
- Receipts added
- Comments on watched tasks
