import {setTimeout as sleep} from 'node:timers/promises';

function runSetTimeoutExample(): void {
  console.log('1. runSetTimeoutExample started')

  setTimeout(() => {
    console.log('2. setTimeout callback executed')
  }, 1000);

  console.log('3. runSetTimeoutExample ended')
}

function runSetClearTimeoutExample(): void {
  const timeoutId = setTimeout(() => {
    console.log('Timeout callback executed')
  }, 1000);

  clearTimeout(timeoutId);
  console.log('4. Timeout cleared')
}

function runIntervalExample(): void {
  let count = 0;

  const intervalId = setInterval(() => {
    count++;
    console.log(`5. setInterval callback executed ${count} times`);

    if (count === 3) {
      clearInterval(intervalId);
      console.log('6. Interval cleared');
    }
  }, 1000)
}

function runSetImmediateExample(): void {
  console.log('7. runSetImmediateExample started');
  setImmediate(() => {
    console.log('8. setImmediate callback executed');
  });
  console.log('9. runSetImmediateExample ended');
}

async function runPromiseTimerExample(): Promise<void> {
  console.log('10. runPromiseTimerExample started');
  await sleep(1000);
  console.log('11. Promise timer callback executed');
  console.log('12. runPromiseTimerExample ended');
}

function runTimerDemo(): void {
  runSetTimeoutExample();
  runSetClearTimeoutExample();
  runIntervalExample();
  runSetImmediateExample();
  runPromiseTimerExample();
}

runTimerDemo();