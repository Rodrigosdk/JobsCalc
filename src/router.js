const express = require('express');
const router = express.Router();

const basePath = __dirname+'/views'

router.get('/', (requeste, response) => response.sendFile(`${basePath}/index.html`));
router.get('/job', (requeste, response) => response.sendFile(`${basePath}/job.html`));
router.get('/job/edit', (requeste, response) => response.sendFile(`${basePath}/job-edit.html`));
router.get('/profile', (requeste, response) => response.sendFile(`${basePath}/profile.html`));

module.exports = router;