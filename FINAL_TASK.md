# Project task

This is the description of the project work needed to be completed by the end of the semester.

You should complete this task in a group but all individual members must be able to answer questions regarding the project work.

## Table of Contents

1. [Introduction](#introduction)
2. [Short description](#short-description)
3. [Detailed description](#detailed-description)
    - [Application requirements](#application-requirements)
    - [Other details](#other-details)
    - [Specifics about the demo](#specifics-about-the-demo)
    - [Expected questions about your solution](#expected-questions-about-your-solution)
4. [Success Criteria](#success-criteria)
    - [Must-haves](#must-haves)
    - [Additional points](#additional-points)
    - [Grading](#grading)
5. [Example applications to consider](#example-applications-to-consider)

## Introduction

Successfully passing the mid-semester task ([zh](https://github.com/szalontaijordan/nye-2025-zh/tree/main/zh)) is a prerequisite of applying for the final task in the semester.

## Short description

1. The groups should develop (and deploy) a web application according to specifications
2. The groups should prepare with a short demo of the application.
    * no restrictions: it can be live demo, ppt presentation, or similar
3. The group will receive questions from the auidence and the representatives from EPAM which they should answer
4. Each member of the group should be able to prove that they have participated. 
    * If an individual fails to do so, they will fail the final task (receive `1`)
        * in such case if others from the group who show relevant contribution, their grade would be counted as detailed below
    * If someone cannot attend the demo, but still would like to prove their contribution they can do it via asking the team members to do so (for example by listing git commits)

## Detailed description

### Application requirements

The application must have
* a meaningful UI using React.js, including
  * routing (e.g. react-router)
  * state management (redux, context API, etc.)
  * consistent and responsive UI design (by any means: custom CSS, UI libraries, etc.)
* _a_ backend (preferably nodejs)
  * with JWT based authentication / authorization mechanism
  * with a few (at least 1) API endpoint(s)

#### Other details
* the code should be uploaded to a repository (e.g. Github)
  * **must be sent to EPAM members** for review a **at least 3** days before the exam (e.g. on Teams)
  * preferably with traceable, meaningful commits from the group members
  * branching strategy and code review is up to the teams to decide
* the application can be deployed (e.g. via Vercel), but it's not required, groups can conduct the demo on their local machine
  * it is definitely **not** required to have a nice domain like "my-solution.com"
* usage of AI tools are permitted, but must be indicated somehow (e.g. project readme, code comments, jsdoc, etc.)
* Javascript and/or Typescript are both acceptable
* usage of external APIs are welcome, but not required
* usage of CI/CD are welcome, but not required
* writing of unit tests is welcome, but not required

### Specifics about the demo
* it's enough if 1 person presents the application, but if someone can't attend the demo from the group, please say in advance and prepare for proving their contribution
* as mentioned above, any form of demo is accepted
  * live demo
  * ppt
  * etc.

### Expected questions about your solution
You should be able to answer questions about your solutions regarding:
* high level overview of the application and the tech-stack
    * e.g. "How does the front-end and the back-end communicate?" or "What pages do you have?"
* security related questions
    * e.g. "How do you store your secrets?"
* any other relevant questions about the work done
    * e.g. "Who worked on what?" or "Did you track your work with jira or similar tool?", "Why didn't you use [X]?"

## Success Criteria

### Must-haves
| Criteria | Points | Required
|----------|---------|---------|
|developed the application (aka the repository exists and shared with EPAM)|1|yes
|presented the application|1|yes

### Additional points
| Criteria | Points | Required
|----------|---------|---------|
|the application satisfies the requirements (aka it works the way described above and contains routing etc.)|1|yes
|answered the questions if the solution exists|1|yes
|all group members can prove they contributed to the solution|1|yes
|deployed the application to the internet|1|no
|CI/CD and Unit tests|1|no

### Grading
Grading is based on the sum of the `must-have` and `additional` points.

As the name suggests, `must-have` criteria must be completed in order to consider the `additional` points.

|Points|Result
|-|-
5-7|5
4|4
3|3
2|2
1|1

#### Example 0

"Team S" have developed the application `(1)`, and did the demo `(1)`, all team members have contributed to the solution `(1)`. They answered the questions `(1)`, the application satisfies the requirements `(1)`, and it was not deployed `([0])`.

* In such case the points are for everyone:
`1 + 1 + 1 + 1 + 1 + [0] = 5`

#### Example 1

"Team A" have developed the application `(1)`, and did the demo `(1)`, but not all team members have contributed to the solution `(0)`. They answered the questions `(1)`, the application satisfies the requirements `(1)`, and it was not deployed `([0])`.

* In such case the points are:
`1 + 1 + 0 + 1 + 1 + [0] = 4`
* For the ones not contributing to the solution the points are `1`

#### Example 2

"Team B" have developed the application `(1)`, and did the demo `(1)`, but not all team members have contributed to the solution `(0)`. They couldn't defend their solution `(0)`, the application doesn't satisfy the requirements `(0)`, and it was only ran locally `([0])`.

* In such case the points are:
`1 + 1 + 0 + 0 + 0 + [0] = 2`
* For the ones not contributing to the solution the points are `1`

#### Example 3

"Team C" have developed the application `(1)`, but nobody did the demo `(0)`. At this point counting other points doesn't make any sense.

* In such case the points are:
`1 + 0 = 1`

## Exapmle applications to consider

Feel free to use the backends created for last year's course: https://github.com/epam-nye-cooperation/epam-nye-webapp-2024/tree/main/exam-tasks

* `forum-api`
* `hogwarts-api`
* `notes-api`
* `webshop-api`

If you do so, for the UI please **disregard** last year's instructions about the implementations, and choose the tasks, UI elements what make the most sense for your team.

**You can also create your own backend.**

In every case, you have to prepare your own UI solution.

```
Bonus tip: ask GPT to come up with a UI solution that satisfies such requirements*
```
*but as mentioned above, indicate in the project readme if you use _any_ AI tools...
