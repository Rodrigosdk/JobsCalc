const { match } = require("assert");
const { create } = require("domain");
const { request } = require("http");
const path = require("path");

const basePath = path.join(__dirname, "../views");

const listJobs = [
  {
    name: "Pizzaria Guloso",
    "daily-hours": "2",
    "total-hours": "60",
    created_at: 128010148,
    id: 1,
  },
  {
    name: "OneTwo Project",
    "daily-hours": "3",
    "total-hours": "47",
    created_at: Date.now(),
    id: 2,
  },
];

function daysRemaining(job) {
  const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed();

  const createdDate = new Date(job.created_at);

  const dueDay = createdDate.getDate() + Number(remainingDays);
  const dueDate = createdDate.setDate(dueDay);

  const timeDifference = dueDate - Date.now();

  const day = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return day;
}

function home(requeste, response) {
  const updatedJobes = listJobs.map((job) => {
    const remaining = daysRemaining(job);
    const status = remaining <= 0 ? "done" : "progress";
    return {
      ...job,
      remaining,
      status,
      budget: (75 * job["total-hours"]).toFixed(2),
    };
  });

  return response.render(`${basePath}/index.ejs`, { listJobs: updatedJobes });
}

function jobs(requeste, response) {
  return response.render(`${basePath}/job.ejs`);
}

function jobsEdit(requeste, response) {
  return response.render(`${basePath}/job-edit.ejs`);
}

function profile(requeste, response) {
  response.render(`${basePath}/profile.ejs`);
}

function creatJobs(requeste, response) {
  listJobs.push({
    ...requeste.body,
    created_at: Date.now(),
    id: jobs.length + 1,
  });
  console.log(listJobs);
  return response.redirect("/");
}
module.exports = { home, jobs, jobsEdit, profile, creatJobs };
