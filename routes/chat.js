const express = require('express');
const chat = require('../utils/chat');
const router = express.Router();

router.get('/', async function(req, res, next) {
  const data = {
    model: 'glm-4',
    messages: [
      {"role": "user", "content": "你好"}
    ]
  }
  const response = await chat.completions(data)
  res.send(response.data)
});

module.exports = router;
