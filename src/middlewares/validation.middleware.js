import { body, validationResult } from "express-validator";
import JobModel from "../models/job.model.js";
import path from "path";

export default class ValidationMiddleware {
  constructor() {
    console.log("validation middleware activated !");
  }

  static async validateApplicationData(request, response, next) {
    const rules = [
      body("applicantName")
        .isLength({ min: 4 })
        .withMessage("Name should be more than 4 characters."),
      body("applicantEmail").isEmail().withMessage("Invalid Email ID."),
      body("applicantPhNum")
        .isMobilePhone()
        .withMessage("Invalid Phone Number."),
      body("applicantEducationLevel")
        .notEmpty()
        .withMessage("Provide Education Details"),
      body("applicantExpDet")
        .notEmpty()
        .withMessage("Provide detailed experience."),
    ];

    await Promise.all(
      rules.map((r) => {
        return r.run(request);
      })
    );

    let myErrors = validationResult(request);

    if (!myErrors.isEmpty()) {
      const errors = myErrors["errors"].map((e) => {
        return e["msg"];
      });
      const jobDetails = JobModel.getJobById(request.body.jobId);
      return response.render("apply-form", {
        jobDetails: jobDetails,
        usertype: request.session.usertype,
        error: errors[0],
      });
    }
    console.log("Data Validated succesfully !");
    next();
  }
}
