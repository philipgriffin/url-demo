const fs = require('fs');

try {
  const args = process.argv.slice(2);
  const [source, target] = args;

  fs.renameSync(source, target);

  console.log(`Moved ${source} to ${target}`);
} catch (err) {
  console.error('\nAn error occurred: ', err);
  throw err;
}
