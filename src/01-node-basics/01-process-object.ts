import process from "node:process";

const nodeEnv = process.env.NODE_ENV ?? "development";
const port = Number(process.env.PORT ?? 3000);

console.log(nodeEnv, port);

const argv = process.argv;
console.log(argv);

const command = process.argv[2] ?? "start";
const shouldFail = process.argv.includes("--fail");
const shouldCrash = process.argv.includes("--crash");

console.log(command, shouldFail, shouldCrash);

process.on("exit", (code) => {
  console.log(`Process exited with code ${code}`);
})

function runApp(): void {
  console.log({command});

  if (shouldFail) {
    console.error("Manual failure triggered with --fail flag");
    process.exit(2);
  }

  if (shouldCrash) {
    console.error("Manual crash triggered with --crash flag");
    process.exit(3);
  }
}

runApp();