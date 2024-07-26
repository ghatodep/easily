# easily

easily - job portal | Node.js and Express JS project employing MVC architecture.

## step - 1

create basic node.js - expressjs application sying hello world on default route.
create package.json file with all valid details.

## step - 2

create directory structure as -
<root>
+-----> public +---------------->script, style, uploadedfiles, statics
+------> src +---------------->middlewares, controllers, views, models

## step - 3

create a landing page using bootstrap. different for both job seeker and recruiter. A pop up modal to ask for that information.
Added home.html and main.css files.
hosting public directory using - express.static()
creating setup for ejs setup and rendering home.html as (layout.ejs and home-landing.ejs)

## step - 4

create job model and job controller to manage job data.
files created -> JobModel, JobController, GeneralController,
create jobs.ejs to display all dummy job openings in the job model

## step - 5

create a page to display detailed job notification with all the necessary buttons.
Add relevant routes in the index.js
Ensure proper control methods to handle all the routes.

## step - 6

functionality to apply for a post. configuring multer library for parsing multipart form data
functionality to update the post.
functionality to delete the post.

## step - 7

functionality to send a automated email response to applicants when they apply for a job post.

## step - 8

session configuration for job seeker and recruiter.
login as recruiter tab on job seeker nav panel.
conditional buttons on detailed job post information page.

## step - 9

register and login page for recruiter users - usermodel and usercontroller.
three tiles on recruiter home page - show all jobs and create a new job post and update registration.

## step - 10

functionality to create a new job post by recruiter.
logout functionality.

## step - 11

seeing list of all applicants over a job.
Add new applicant dummy data.
Validation of incoming data.
