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

  // to render job details
  displayJobDetails(request, response, next) {
    console.log(
      `Showing details of job opening with id - ${request.body.jobId}`
    );
    let jobDetails = JobModel.getJobById(request.body.jobId);
    console.log(`Showing details - ${jobDetails.id}`);
    if (jobDetails) {
      response.render("job-details", {
        jobDetails: jobDetails,
        usertype: null,
      });
    } else {
      response.render("job-details", { jobDetails: null, usertype: null });
    }
  }

  displayApplicationForm(request, response, next) {
    console.log(`Display Application Form - job id ${request.body.jobId}`);
    let jobDetails = JobModel.getJobById(request.body.jobId);
    if (jobDetails) {
      response.render("apply-form", {
        jobDetails: jobDetails,
        usertype: null,
      });
    } else {
      response.render("apply-form", { jobDetails: null, usertype: null });
    }
  }

  displayUpdateJobForm(request, response, next) {
    console.log(`Display update Job Post Form - job id ${request.body.jobId}`);
    response.send("1");
  }

  deleteJobPost(request, response, next) {
    console.log(`delete job post with - job id ${request.body.jobId}`);
    response.send("5");
  }
}
