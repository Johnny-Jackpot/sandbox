import * as os from 'node:os';

console.log('platform:', os.platform());
console.log('architecture:', os.arch());
console.log('os type:', os.type());
console.log('os release:', os.release());
console.log('home dir:', os.homedir());
console.log('tmpdir dir:', os.tmpdir());
console.log('hostname:', os.hostname());

const cpus = os.cpus();
console.log(cpus.length);

for (let cpu of cpus) {
  console.log('CPU:', cpu.model, cpu.speed, cpu.times)
}

console.log('total mem:', os.totalmem());
console.log('free mem:', os.freemem());