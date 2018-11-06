const pwdLink = require('./pwd.js');

process.stdout.write('prompt >');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();

  if (cmd === 'pwd') {
    pwdLink();
  }
  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt >');
});
