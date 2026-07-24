type User = {
  id: number;
  name: string;
  role: 'user'|'super-admin';
}

const users: User[] = [
  {id: 1, name: 'John', role: 'user'},
  {id: 2, name: 'Jane', role: 'super-admin'},
  {id: 3, name: 'Bob', role: 'user'},
];

function fetchUserWithCallback(
  id: number,
  cb: (error: Error|null, user?: User) => void
): void {
  setTimeout(() => {
    const user = users.find(u => u.id === id);
    user ? cb(null, user) : cb(new Error(`User with id ${id} not found`));
  }, 1000)
}

fetchUserWithCallback(1, (error, user) => console.log(error?.message, user));
fetchUserWithCallback(34, (error, user) => console.log(error?.message, user));

function fetchUserWithPromise(userId: number): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(u => u.id === userId);
      user ? resolve(user) : reject(new Error(`User with id ${userId} not found`));
    }, 1000)
  })
}

fetchUserWithPromise(1).then(user => console.log(user));
fetchUserWithPromise(34).catch(error => console.log(error.message));

async function fetchUserWithAsyncAwait(userId: number): Promise<void> {
  try {
    const user = await fetchUserWithPromise(userId);
    console.log('async/await', user);
  } catch (error) {
    const msg = error instanceof Error ? error.message : 'Unknown error';
    console.log(msg);
  }
}

fetchUserWithAsyncAwait(1);
fetchUserWithAsyncAwait(34);