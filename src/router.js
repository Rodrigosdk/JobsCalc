const express = require('express');
const router = express.Router();

router.get('/', (requeste, response) => {
    return response.sendFile(__dirname + '/views/index.html')
});

module.exports = router;