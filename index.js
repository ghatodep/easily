// importing external libraries
import express from "express";
import path from "path";
import ejsLayouts from "express-ejs-layouts";

// importing internal modules - controllers
import GeneralController from "./src/controllers/general.controller.js";
import JobController from "./src/controllers/job.controller.js";

// creating a server
export const server = express();

// creating instances of imported class modules
const generalController = new GeneralController();
const jobController = new JobController();

// application level middleware to host public files directly
server.use(express.static(path.resolve("public")));

// setting up ejs layouts paths and view engine
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));

// application level middleware for processing form data using urlencoded parser
server.use(express.urlencoded({ extended: true }));

// application level middleware processing views
server.use(ejsLayouts);

// default route of the application
server.get("/", generalController.rootHomeRender);

// post request for user specific home page
server.post("/home", generalController.rootHomePost);

// render all jobs on the display
server.get("/jobs", jobController.displayJobPosts);

// render details of a job by id
server.post("/jobs", jobController.displayJobDetails);

// render form to apply to a job
server.post("/apply", jobController.displayApplicationForm);

// render form to update the job posting
server.post("/updatePost", jobController.displayUpdateJobForm);

// render form to update the job posting
server.post("/deletePost", jobController.deleteJobPost);
