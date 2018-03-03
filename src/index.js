import findMaxLength from './maxLength';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> ',
});

rl
  .on('line', (line) => {
    const length = findMaxLength(line);
    console.log(length);
    rl.prompt();
  })
  .on('close', () => {
    console.log('Program Ends');
    process.exit(0);
  });

rl.prompt();
