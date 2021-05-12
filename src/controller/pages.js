const { request } = require("http");
const path = require("path");

const basePath = path.join(__dirname, "../views");

const listJobs = [
  {
    name: "Pizzaria Guloso",
    "daily-hours": "72",
    "total-hours": "820",
    created_at: Date.now(),
    id: 0,
  },
  {
    name:"OneTwo Project",
    "daily-hours": "72",
    "total-hours": "820",
    created_at: Date.now(),
    id: 1,
  }
];

function home(requeste, response) {
  return response.render(`${basePath}/index.ejs`, {listJobs});
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
    id: jobs.length,
  });
  console.log(listJobs);
  return response.redirect("/");
}
module.exports = { home, jobs, jobsEdit, profile, creatJobs };
