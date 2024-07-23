import JobModel from "../models/job.model.js";
import ApplicantModel from "../models/applicants.model.js";

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
    if (jobDetails) {
      response.render("job-details", {
        jobDetails: jobDetails,
        usertype: null,
      });
    } else {
      response.render("job-details", { jobDetails: null, usertype: null });
    }
  }

  // render application form
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

  // process the application form data submitted by the user
  processApplicationFormData(request, response, next) {
    console.log("Application form data received -> ");
    console.log(request.body);
    console.log(`Applicant Resume file -`);
    console.log(request.file);
    // creating new applicant entry
    const applicantId = ApplicantModel.createNewApplicant(
      request.body.applicantName,
      request.body.applicantEmail,
      request.body.applicantPhNum,
      request.body.applicantCity,
      request.body.applicantDob,
      request.body.applicantGender,
      request.body.applicantEducationLevel,
      request.body.applicantMarks,
      request.body.applicantEduDet,
      request.body.applicantExpDur,
      request.body.applicantExpCompName,
      request.body.applicantExpDes,
      request.body.applicantExpDet,
      request.file.path,
      request.body.jobId
    );
    JobModel.addApplicantId(request.body.jobId, applicantId);
    let jobDetails = JobModel.getJobById(request.body.jobId);
    response.render("applicationReceived", {
      jobDetails: jobDetails,
      usertype: null,
      applicantId: applicantId,
    });
  }

  // render a form to update job post details
  displayUpdateJobForm(request, response, next) {
    console.log(`Display update Job Post Form - job id ${request.body.jobId}`);
    let jobDetails = JobModel.getJobById(request.body.jobId);
    response.render("jobUpdateForm", {
      jobDetails: jobDetails,
      usertype: null,
    });
  }

  updateJobPost(request, response, next) {
    console.log("data received for job updation ->");
    console.log(request.body);
    const status = JobModel.updateJobDetails(request.body);
    let jobDetails = JobModel.getJobById(request.body.jobId);
    response.render("jobUpdateResult", {
      usertype: null,
      jobDetails: jobDetails,
      status: status,
    });
  }

  deleteJobPost(request, response, next) {
    console.log(`delete job post with - job id ${request.body.jobId}`);
    let status = JobModel.deleteJobById(request.body.jobId);
    response.render("delete", { usertype: null, status: status });
  }
}
