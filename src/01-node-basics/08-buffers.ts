const textBuffer = Buffer.from('Hello World');
console.log(textBuffer);
console.log(textBuffer.toString('utf8'));
console.log(textBuffer.toString('hex'));
console.log(textBuffer.toString('base64url'));
console.log(textBuffer.toString('ascii'));
console.log(textBuffer.toString('latin1'));

const engBuffer = Buffer.from('Hello');
console.log(engBuffer.length);

const fixedBuffer = Buffer.alloc(5);
console.log(fixedBuffer);
fixedBuffer.write('API');
console.log(fixedBuffer);
console.log(fixedBuffer.toString('utf8'));

const chunks = [
  Buffer.from('Hello '),
  Buffer.from('Node '),
  Buffer.from('JS'),
];
const combinedBuffer = Buffer.concat(chunks);
console.log(combinedBuffer.toString('utf8'));