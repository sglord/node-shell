const pwdLink = require('./pwd.js');
const lsLink = require('./ls.js');

process.stdout.write('prompt >');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();

  if (cmd === 'pwd') {
    pwdLink();
  }

  if (cmd === 'ls') {
    lsLink();
  }
  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt >');
});
