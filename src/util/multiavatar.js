const md5 = require('md5');

const multiavatar = email => {
  const hash = md5(email);
  return `https://api.multiavatar.com/${hash}.png`;
};

module.exports = multiavatar;
