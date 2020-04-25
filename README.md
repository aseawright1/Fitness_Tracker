# 12.Fitness_Tracker
 Log your workouts and see past and present stats

## What this project is
This is a visual application with input fields that allow you to log your workout details, and a stats page where you can see all workouts of the week.

When the user loads the page, they are given the option to create a new workout, or continue with their last workout. The user is able to:

  * Add exercises to a previous workout plan.

  * Add new exercises to a new workout plan.

  * View multiple the combined weight of multiple exercises on the `stats` page.

## Demo
![demo](/demo.gif)

## Why I began this project
Spending time #StayingAtHome during quarantine, I've had to put new efforts into maintaining my fitness and finding creative ways to workout around the house. This is a way to create and track daily workouts, and to log multiple exercises in a workout on a given day. With this app I'm also able to track the name, type, weight, sets, reps, and duration of the exercise. Even if the exercise is cardio-based instead of strength, I am able to log it here.

## How I implemented this project
This project was implemented using [Node.js](https://nodejs.org/en/about/), [Express](https://expressjs.com/), [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/docs/) dependency, and [Morgan](https://www.npmjs.com/package/morgan) logger middleware, with [Bootstrap](https://getbootstrap.com/) for the front-end and [Chart.js](https://www.chartjs.org/) for the pretty graphs.

## What I hope to eventually accomplish with this project
For future versions of this application I would like to add:
* A timer widget
* Option to log 'time' as well as distance for cardio exercises
* Pre-selected exercises for more efficient data entry
