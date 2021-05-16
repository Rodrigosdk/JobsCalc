function daysRemaining(job) {
  const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed();

  const createdDate = new Date(job.created_at);

  const dueDay = createdDate.getDate() + Number(remainingDays);
  const dueDate = createdDate.setDate(dueDay);

  const timeDifference = dueDate - Date.now();

  const day = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return day;
}

module.exports = daysRemaining