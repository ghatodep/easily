import JobModel from "../models/job.model.js";
import ApplicantModel from "../models/applicants.model.js";
import { sendEmail } from "./email.controller.js";

export default class JobController {
  constructor() {
    console.log("Job Controller Activated !");
  }

  // to render all jobs on the screen
  displayJobPosts(request, response, next) {
    console.log("Showing All job posts.");
    const jobs = JobModel.getAllJobs();
    response.render("jobs", { jobs: jobs, usertype: request.session.usertype });
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
        usertype: request.session.usertype,
      });
    } else {
      response.render("job-details", {
        jobDetails: null,
        usertype: request.session.usertype,
      });
    }
  }

  // render application form
  displayApplicationForm(request, response, next) {
    console.log(`Display Application Form - job id ${request.body.jobId}`);
    let jobDetails = JobModel.getJobById(request.body.jobId);
    if (jobDetails) {
      response.render("apply-form", {
        jobDetails: jobDetails,
        usertype: request.session.usertype,
      });
    } else {
      response.render("apply-form", {
        jobDetails: null,
        usertype: request.session.usertype,
      });
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
    let jobDetails = JobModel.getJobById(request.body.jobId);

    if (applicantId) {
      JobModel.addApplicantId(request.body.jobId, applicantId);
      // sending email
      sendEmail(
        applicantId,
        request.body.applicantName,
        request.body.applicantEmail,
        jobDetails
      );
    }
    // rendering response
    response.render("applicationReceived", {
      jobDetails: jobDetails,
      usertype: request.session.usertype,
      applicantId: applicantId,
    });
  }

  // render a form to create new job post
  displayNewJobPostForm(request, response, next) {
    console.log(`Display create new Job Post Form!`);
    response.render("newJobPost", {
      usertype: request.session.usertype,
    });
  }

  // add new job post - data processing
  createNewJobPost(request, response, next) {
    console.log(`Job data to create new job -`);
    console.log(request.body);
    const status = JobModel.addNewJob(request.body);
    const jobDetails = JobModel.getJobById(status);
    response.render("newJobPostResult", {
      jobDetails: jobDetails,
      usertype: request.session.usertype,
    });
  }

  // render a form to update job post details
  displayUpdateJobForm(request, response, next) {
    console.log(`Display update Job Post Form - job id ${request.body.jobId}`);
    let jobDetails = JobModel.getJobById(request.body.jobId);
    response.render("jobUpdateForm", {
      jobDetails: jobDetails,
      usertype: request.session.usertype,
    });
  }

  updateJobPost(request, response, next) {
    console.log("data received for job updation ->");
    console.log(request.body);
    const status = JobModel.updateJobDetails(request.body);
    let jobDetails = JobModel.getJobById(request.body.jobId);
    response.render("jobUpdateResult", {
      usertype: request.session.usertype,
      jobDetails: jobDetails,
      status: status,
    });
  }

  deleteJobPost(request, response, next) {
    console.log(`delete job post with - job id ${request.body.jobId}`);
    let status = JobModel.deleteJobById(request.body.jobId);
    response.render("delete", {
      usertype: request.session.usertype,
      status: status,
    });
  }
}
