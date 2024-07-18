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
