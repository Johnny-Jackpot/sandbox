import path from 'node:path';

const projectRoot = process.cwd();
console.log('projectRoot: ', projectRoot);

const userId = 42;
const originalName = 'profile.jpg';
const uploadFilePath = path.join(
  projectRoot,
  'uploads',
  'users',
  userId.toString(),
  originalName
);
console.log('uploadFilePath: ', uploadFilePath);

const fileName = path.basename(uploadFilePath);
console.log('fileName: ', fileName);

const fileExt = path.extname(uploadFilePath);
console.log('fileExt: ', fileExt);

const parentFolder = path.dirname(uploadFilePath);
console.log('parentFolder: ', parentFolder);