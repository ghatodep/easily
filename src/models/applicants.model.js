export default class ApplicantModel {
  constructor(
    _id,
    applicantName,
    applicantEmail,
    applicantPhNum,
    applicantCity,
    applicantDob,
    applicantGender,
    applicantEducationLevel,
    applicantMarks,
    applicantEduDet,
    applicantExpDur,
    applicantExpCompName,
    applicantExpDes,
    applicantExpDet,
    applicantResumePath
  ) {
    this.id = _id ? _id : ApplicantModel.idGenerator++;
    this.applicantName = applicantName;
    this.applicantEmail = applicantEmail;
    this.applicantPhNum = applicantPhNum;
    this.applicantCity = applicantCity;
    this.applicantDob = applicantDob;
    this.applicantGender = applicantGender;
    this.applicantEducationLevel = applicantEducationLevel;
    this.applicantMarks = applicantMarks;
    this.applicantEduDet = applicantEduDet;
    this.applicantExpDur = applicantExpDur;
    this.applicantExpCompName = applicantExpCompName;
    this.applicantExpDes = applicantExpDes;
    this.applicantExpDet = applicantExpDet;
    this.applicantResumePath = applicantResumePath;
    console.log(
      `Applicant Created -> ${this.applicantName}~${this.applicantEmail}~${this.id}`
    );
  }

  static idGenerator = 1;

  static addApplicant(jobId, applicant) {
    if (jobId in applicants) {
      applicants[jobId].push(applicant);
    } else {
      applicants[jobId] = [applicant];
    }
  }

  static createNewApplicant(
    applicantName,
    applicantEmail,
    applicantPhNum,
    applicantCity,
    applicantDob,
    applicantGender,
    applicantEducationLevel,
    applicantMarks,
    applicantEduDet,
    applicantExpDur,
    applicantExpCompName,
    applicantExpDes,
    applicantExpDet,
    applicantResumePath,
    jobId
  ) {
    try {
      let newApplicant = new ApplicantModel(
        null,
        applicantName,
        applicantEmail,
        applicantPhNum,
        applicantCity,
        applicantDob,
        applicantGender,
        applicantEducationLevel,
        applicantMarks,
        applicantEduDet,
        applicantExpDur,
        applicantExpCompName,
        applicantExpDes,
        applicantExpDet,
        applicantResumePath
      );
      ApplicantModel.addApplicant(jobId, newApplicant);
      return newApplicant.id;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static getApplicantsByJobId(jobId) {
    if (jobId in applicants) {
      return applicants[jobId];
    } else {
      return null;
    }
  }

  static getApplicantInfo(applicantId) {
    for (let j of Object.keys(applicants)) {
      let status = applicants[j].findindex((a) => a.id == applicantId);
      if (status != -1) {
        return applicants[j][a];
      }
    }
    return null;
  }
}

var applicants = {};
