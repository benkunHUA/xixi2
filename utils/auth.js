const jwt = require("jsonwebtoken");

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

module.exports = {
  getToken,
};
