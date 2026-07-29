import EventEmitter from "node:events";

const appEvents = new EventEmitter();

appEvents.once('app:started', () => {
  console.log('App started');
})

type UserRegisteredPayload = {
  id: number;
  email: string;
};

appEvents.on('user:registered', (user: UserRegisteredPayload) => {
  console.log('User registered:', user);
});
appEvents.on('user:registered', (user: UserRegisteredPayload) => {
  console.log('Another listener:', user);
});

function registerUser() {
  const user: UserRegisteredPayload = {id: 1, email: 'example@example.com'};
  appEvents.emit('user:registered', user);
  console.log('Listeners completed');
}

registerUser();

appEvents.emit('app:started');
appEvents.emit('app:started');
appEvents.emit('app:started');
appEvents.emit('app:started');