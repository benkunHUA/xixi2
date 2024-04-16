const jwt = require("jsonwebtoken");
const axios = require('axios');

function getToken() {
  var apiKey = "b54b33c5ca5f03014ad0e57c7417b59f.iWwPFGQmXxsvPKhL";
  const [id, secret] = apiKey.split(".");
  const date = Date.now();
  const payload = {
    api_key: id,
    exp: date + 3600 * 1000,
    timestamp: date,
  };
  return jwt.sign(payload, secret, {
    header: { alg: "HS256", sign_type: "SIGN" },
  });
}

async function completions(data) {
  const response = await axios.post('https://open.bigmodel.cn/api/paas/v4/chat/completions', data, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getToken()}`
    },
  });
  return response;
}

module.exports = {
  getToken,
  completions
};
