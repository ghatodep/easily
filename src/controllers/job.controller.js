import JobModel from "../models/job.model.js";

export default class JobController {
  constructor() {
    console.log("Job Controller Activated !");
  }

  // to render all jobs on the screen
  displayJobPosts(request, response, next) {
    console.log("Showing All job posts.");
    const jobs = JobModel.getAllJobs();
    response.render("jobs", { jobs: jobs, usertype: null });
  }
}
