# 🏠 Tasqly — Product Description

![alt text](logo.png)

### 1. Overview

Tasqly is a modern household-task management app built for roommates, tenants, and shared living environments. It helps users assign chores, track recurring tasks, share receipts, request repairs from landlords, and stay in sync — all in one clean, intuitive platform.

### 2. Core Purpose

Shared living can easily become chaotic without structure. Tasqly solves this by providing a unified place where everyone in a household knows what needs to be done, who’s responsible, and when tasks are completed. It reduces friction, improves communication, and makes home life smoother for everyone.

### 3. Key Features

Each core feature includes a brief explanation to make the document enjoyable and easy to understand.
- Task Assignment – Users can assign tasks to specific roommates or the whole group, with an accept/reject workflow so responsibilities are always clear.
- Recurring Tasks – Perfect for weekly chores (trash, cleaning, dishes). Tasqly automatically regenerates tasks on a schedule you choose.
- Task Status Updates – The assigned roommate or landlord (for repairs) can update progress (pending → in progress → completed), keeping everyone aligned.
- Comments on Tasks – Each task includes a discussion thread where roommates can clarify, ask questions, or update progress in real time.
- Repair & Service Requests – Tenants can request landlord support for issues like leaks, broken appliances, or maintenance — with photos included.
- Receipt Uploads – Users can upload images of receipts (stored in S3) to track shared expenses transparently.
- Push Notifications – Alerts for assignments, upcoming deadlines, task acceptance, rejections, or completions keep everyone on track.
- Backlog / Archive – Completed tasks move into a historical archive, allowing households to review past chores, repairs, and purchases anytime.

### 4. User Roles

Tasqly supports two main user types:

Tenants / Roommates
- Can create, assign, accept, reject, and update tasks.
- Can upload receipts for shared expenses.
- Can submit repair/service requests.
- Can comment on tasks and track progress.

Landlords
- Can view all repair requests submitted by tenants.
- Can update the status of repairs (received, scheduled, completed).
- Can communicate with tenants through comments on repair tasks.
- And all Tenants/Roommates features.

### 5. User Scenarios (Use Cases)

Real-world examples make the app’s value easy to imagine.
- Weekly Chores – Alice assigns the “Take out trash” task to Tyler. Tyler accepts the assignment, updates the status when it’s done, and it automatically moves to the backlog.
- Organizing Shared Shopping – Mia buys groceries, uploads the receipt, and attaches it to the “Grocery Run” task so everyone knows what she paid.
- Repair Request – John notices a leaking pipe. He takes a photo, submits a repair request, and the landlord updates the status to “Scheduled for tomorrow.”
- Roommate Clarification – Emma is assigned “Clean the kitchen” but is unsure about timing. She comments on the task asking, “Can I do it Saturday instead?” and receives instant responses.
- Recurring Responsibilities – The “Vacuum living room” task is set as weekly. Tasqly automatically regenerates it every Saturday for a selected roommate.

### 6. Value Proposition

Tasqly provides clarity, fairness, and structure in shared living situations. Instead of relying on group chats, sticky notes, or constant reminders, users get a centralized system that handles assignment, tracking, communication, and accountability — all while keeping things friendly and transparent.

### 7. Future Enhancements

Tasqly will continue to evolve, with potential features such as:
- OCR Receipt Scanning – Automatically extract amounts, dates, and items from receipts.
- In-App Chat – Dedicated messaging between roommates and landlords.
- AI Chore Suggestions – Automated recommendations for weekly or monthly chores based on household patterns.
- Household Analytics Dashboard – Visual insights into completed tasks, fairness distribution, and maintenance history.
- Tenant Move-In / Move-Out Reports – Auto-generate documents summarizing tasks and repairs.

