const path = require('path');

const basePath = path.join(__dirname, '../views')

function home(requeste, response) {
  return response.render(`${basePath}/index.ejs`);
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

module.exports = {home,jobs,jobsEdit,profile}