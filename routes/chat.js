const express = require('express');
const { TextDecoder } = require('util');
const chat = require('../utils/chat');
const router = express.Router();

router.get('/', async function(req, res, next) {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  const data = {
    model: 'glm-4',
    stream: true,
    messages: [
      {"role": "user", "content": "你好"}
    ]
  }
  const utf8Decoder = new TextDecoder("utf-8");
  const response = await chat.completions(data)
  response.data.on('data', (chunk) => {
    // 处理接收到的数据
    let str = utf8Decoder.decode(chunk);
    str = chat.adapt(str);
    res.write(str + '\n');
  });
});

module.exports = router;
