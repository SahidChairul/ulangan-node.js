import process from 'node:process';

process.on('beforeExit', (code) => {
  console.log(`NodeJS Exit with code ${code}`);
});

process.on('exit', (code) => {
  console.log('Process exit event with code: ', code);
});

console.log(process.version);

// process.exit(1)

console.log('This message is displayed first.');