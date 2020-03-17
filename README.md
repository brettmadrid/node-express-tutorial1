# Channel Web API

## Prerequisites

- an HTTP client like [Postman](https://www.getpostman.com/downloads/) or [Insomnia](https://insomnia.rest/download/).

## Assignment

Build a RESTful Web API to manage _"Lessons"_ and _"Channels"_. A _Channel_ is a group chat channel that brings together an instructor and a group of students from the same cohort as they work on a _Lesson_.

An example would be a _Channel_ created to go over the "Introduction to Node and Express" lesson for the _WebDevelopment 1_ cohort.

A Lesson has:

- a unique `id`.
- a `name`.

A Channel has:

- a unique `id`.
- a `name`.
- a `lessonId` that connects it to the corresponding Lesson.
- a `cohort`.

### Features

The Web API must provide a set of `endpoints` to fulfill the following needs:

- add a new Lesson.
- view a list of existing Lessons.
- view the details of a single Lesson
- update the information of an existing Lesson.
- remove a Lesson.
- add a new Channel.
- view a list of existing Channels.
- view the details of a single Channel
- update the information of an existing Channel.
- remove a Channel.

Here is a table with the `endpoint` descriptions:

| Action                | URL                | Method | Response          |
| :-------------------- | :----------------- | :----- | :---------------- |
| Add a Lesson          | /api/lessons       | POST   | the new Lesson    |
| View list of Lessons  | /api/lessons       | GET    | array of Lessons  |
| View Lesson details   | /api/lessons/{id}  | GET    | a Lesson          |
| Update Lesson         | /api/lessons/{id}  | PATCH  | updated Lesson    |
| Remove a Lesson       | /api/lessons/{id}  | DELETE | deleted Lesson    |
| Add a Channel         | /api/channels      | POST   | the new Channel   |
| View list of Channels | /api/channels      | GET    | array of Channels |
| View Channel details  | /api/channels/{id} | GET    | a Channel         |
| Update Channel        | /api/channels/{id} | PATCH  | updated Channel   |
| Remove a Channel      | /api/channels/{id} | DELETE | deleted Channel   |