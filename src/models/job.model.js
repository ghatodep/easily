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
    this.packageLimit = _packageLimit + "LPA";
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
}

let date = new Date();

var jobs = [
  new JobModel(
    null,
    "Amazon-India",
    "Technology",
    "Software Engineer",
    "10-15",
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
    "5-7",
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
    "3.5-5",
    "Nagpur",
    ["Communication", "Problem Solving", "Operations", "Management"],
    1,
    date,
    date.setMonth(date.getMonth() + 1)
  ),
];
