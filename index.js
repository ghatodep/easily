// importing external libraries
import express from "express";
import path from "path";
import ejsLayouts from "express-ejs-layouts";

// importing internal modules - controllers
import GeneralController from "./src/controllers/general.controller.js";
import JobController from "./src/controllers/job.controller.js";
import UserController from "./src/controllers/user.controller.js";

// importing internal modules - middlewares
import uploadFile from "./src/middlewares/uploadFile.middleware.js";
import {
  sessionMiddleware,
  authorize,
} from "./src/middlewares/authentication.middleware.js";

// creating a server
export const server = express();

// creating instances of imported class modules
const generalController = new GeneralController();
const jobController = new JobController();
const userController = new UserController();

// application level middleware to host public files directly
server.use(express.static(path.resolve("public")));

// application level middleware for session management
server.use(sessionMiddleware);

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

// rendering home page
server.get("/home", generalController.getHome);

// render all jobs on the display
server.get("/jobs", jobController.displayJobPosts);

// render details of a job by id
server.post("/jobs", jobController.displayJobDetails);

// render form to apply to a job
server.post("/apply", jobController.displayApplicationForm);

// receiving the submitted application form and processing it
server.post(
  "/formSubmit",
  uploadFile.single("applicantResume"),
  jobController.processApplicationFormData
);

// render form to update the job posting
server.post(
  "/updateJobPostForm",
  authorize,
  jobController.displayUpdateJobForm
);

// update job details as per details submitted by user through update job post form
server.post("/updateJobPost", authorize, jobController.updateJobPost);

// render form to update the job posting
server.post("/deletePost", authorize, jobController.deleteJobPost);

// render registration form
server.get("/register", userController.displayRegisterForm);

// process register details
server.post("/register", userController.registerRecruiter);

// render login page
server.get("/login", userController.displayLoginForm);

// process login details
server.post("/login", userController.loginRecruiter);
