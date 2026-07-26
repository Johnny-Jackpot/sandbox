import path from "node:path";
import fs from "node:fs";
import fsPromises from "node:fs/promises";

const DEMO_FOLDER_PATH = path.join(process.cwd(), 'demo-folder', 'fs-demo');
const SYNC_FILE_PATH = path.join(DEMO_FOLDER_PATH, 'sync-file.txt');
const CALLBACK_FILE_PATH = path.join(DEMO_FOLDER_PATH, 'callback-file.txt');
const PROMISE_FILE_PATH = path.join(DEMO_FOLDER_PATH, 'promise-file.txt');

type FileResult = {
  style: string;
  fileName: string;
  content: string;
  sizeInBytes: number;
}

function ensureFolderExists(folderPath: string): void {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, {recursive: true});
  }
}

function runSyncExample(): FileResult {
  fs.writeFileSync(SYNC_FILE_PATH, 'created by sync fs module', 'utf8');
  fs.appendFileSync(SYNC_FILE_PATH, ' appended by sync fs module', 'utf8');
  const content = fs.readFileSync(SYNC_FILE_PATH, 'utf8');
  const stats = fs.statSync(SYNC_FILE_PATH);

  return {
    style: 'sync',
    content,
    fileName: path.basename(SYNC_FILE_PATH),
    sizeInBytes: stats.size,
  }
}

function runCallbackExample(): Promise<FileResult> {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      CALLBACK_FILE_PATH,
      "created using callback fs module",
      "utf8",
      (writeError) => {
        if (writeError) {
          reject(writeError);
          return;
        }

        fs.appendFile(
          CALLBACK_FILE_PATH,
          " appended using callback fs module",
          "utf8",
          (appendError) => {
            if (appendError) {
              reject(appendError);
              return;
            }

            fs.readFile(CALLBACK_FILE_PATH, "utf8", (readError, content) => {
              if (readError) {
                reject(readError);
                return;
              }

              fs.stat(CALLBACK_FILE_PATH, (statError, stats) => {
                if (statError) {
                  reject(statError);
                }

                resolve({
                  style: 'callback',
                  content,
                  fileName: path.basename(CALLBACK_FILE_PATH),
                  sizeInBytes: stats.size,
                });
              })

            })
          }
        );
      }
    );
  });
}

async function runPromiseExample(): Promise<FileResult> {
  await fsPromises.writeFile(PROMISE_FILE_PATH, "created using promise fs module", 'utf8');
  await fsPromises.appendFile(PROMISE_FILE_PATH, " appended using promise fs module", 'utf8');
  const content = await fsPromises.readFile(PROMISE_FILE_PATH, 'utf8');
  const stats = await fsPromises.stat(PROMISE_FILE_PATH);

  return {
    style: 'promise',
    content,
    fileName: path.basename(PROMISE_FILE_PATH),
    sizeInBytes: stats.size,
  }
}

async function main(): Promise<void> {
  try {
    ensureFolderExists(DEMO_FOLDER_PATH);
    const result = await runSyncExample();
    const callbackResult = await runCallbackExample();
    const promiseResult = await runPromiseExample();
    console.log([result, callbackResult, promiseResult]);
  } catch (error) {
    const msg = error instanceof Error ? error.message : 'Unknown error';
    console.error('fs error:', msg);
  }
}

main();