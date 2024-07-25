export default class JobModel {
  constructor(
    _id,
    _compName,
    _domain,
    _designation,
    _packageLimit,
    _location,
    _skillRequired,
    _vacancy,
    _postedDate,
    _closingDate
  ) {
    this.id = _id ? _id : JobModel.idGenerator++;
    this.compName = _compName;
    this.domain = _domain;
    this.designation = _designation;
    this.packageLimit = Number(_packageLimit);
    this.location = _location;
    this.skillRequired = _skillRequired;
    this.vacancy = _vacancy;
    this.postedDate = _postedDate;
    this.closingDate = _closingDate;
    this.applicantList = new Array();
    console.log(
      `New Job Posting Created - ${this.id}.${this.compName}~${this.domain}~${this.designation}`
    );
  }

  static idGenerator = 1;

  static addNewJob(_data) {
    try {
      const {
        domain,
        compName,
        designation,
        packageLimit,
        skillRequired,
        vacancy,
        location,
        closingDate,
      } = _data;

      const postedDate = new Date();

      const newJob = new JobModel(
        null,
        compName,
        domain,
        designation,
        packageLimit,
        location,
        skillRequired,
        vacancy,
        postedDate,
        closingDate
      );

      jobs.push(newJob);
      return newJob.id;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static getAllJobs() {
    return jobs;
  }

  static getJobById(_id) {
    return jobs.find((job) => {
      if (job.id == Number(_id)) {
        return job;
      }
    });
  }

  static addApplicantId(jobId, ApplicantId) {
    let jobIndex = jobs.findIndex((job) => {
      if (job.id == Number(jobId)) {
        return job;
      }
    });
    if (jobIndex != -1) {
      jobs[jobIndex]["applicantList"].push(ApplicantId);
    }
  }

  static deleteJobById(jobId) {
    let jobIndex = jobs.findIndex((job) => {
      if (job.id == Number(jobId)) {
        return job;
      }
    });
    if (jobIndex != -1) {
      jobs.splice(jobIndex, 1);
    }
    return jobIndex;
  }

  static updateJobDetails(newData) {
    const {
      jobId,
      compName,
      domain,
      designation,
      packageLimit,
      location,
      skillRequired,
      vacancy,
      closingDate,
    } = newData;

    let jobIndex = jobs.findIndex((job) => {
      return job.id == Number(jobId);
    });

    if (jobIndex != -1) {
      jobs[jobIndex]["compName"] = compName;
      jobs[jobIndex]["domain"] = domain;
      jobs[jobIndex]["designation"] = designation;
      jobs[jobIndex]["packageLimit"] = packageLimit;
      jobs[jobIndex]["location"] = location;
      jobs[jobIndex]["skillRequired"] = skillRequired;
      jobs[jobIndex]["vacancy"] = vacancy;
      jobs[jobIndex]["closingDate"] = closingDate;
    }

    return jobIndex;
  }
}

let date = new Date();

var jobs = [
  new JobModel(
    null,
    "Amazon-India",
    "Technology",
    "Software Engineer",
    "10",
    "Pune-Hinjewadi",
    ["Prograaming", "Problem Solving", "Python", "OOPs"],
    5,
    date,
    date.setMonth(date.getMonth() + 1)
  ),
  new JobModel(
    null,
    "Qualcomm India",
    "Technology",
    "VLSI Engineer",
    "5",
    "Hyderabad",
    [
      "Prograaming",
      "Problem Solving",
      "VHDL",
      "Embedded Principles",
      "8085 and ARM Architecture",
    ],
    10,
    date,
    date.setMonth(date.getMonth() + 1)
  ),
  new JobModel(
    null,
    "HCL Technologies Ltd",
    "Technology",
    "Teamcenter Developer",
    "12",
    "Noida, India",
    [
      "Prograaming",
      "Problem Solving",
      "PLM",
      "Migration Activity",
      "BMIDE Customization",
    ],
    3,
    date,
    date.setMonth(date.getMonth() - 1)
  ),
  new JobModel(
    null,
    "L&T Ltd",
    "Human Resource",
    "Site Manager",
    "5",
    "Nagpur",
    ["Communication", "Problem Solving", "Operations", "Management"],
    1,
    date,
    date.setMonth(date.getMonth() + 1)
  ),
];
