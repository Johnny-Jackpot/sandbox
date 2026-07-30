import {Readable, Transform, Writable} from "node:stream";
import {pipeline} from "node:stream/promises";


const readableStream = Readable.from([
  "hello ",
  "from ",
  "node.js ",
  "streams"
]);

const uppercaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    console.log('transform chunk: ', chunk, encoding);
    callback(null, chunk.toString().toUpperCase());
  }
})

const writableStream = new Writable({
  write(chunk, encoding, callback) {
    console.log('writable received chunk: ', chunk.toString(), encoding);
    callback();
  }
})

async function main(): Promise<void> {
  try {
    await pipeline(
      readableStream,
      uppercaseTransform,
      writableStream,
    );

    console.log("Stream completed");
  } catch (error) {
    const msg = error instanceof Error ? error.message : 'Unknown error';
    console.error('stream failed: ', msg);
  }
}

main();