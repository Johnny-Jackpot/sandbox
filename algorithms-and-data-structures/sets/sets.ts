const users: Set<string> = new Set();
users.add("Alice").add("Bob").add("David").add("Alice");
console.log(users);
console.log(users.size);

const visitors: Set<string> = new Set();
visitors.add("user123").add("user345");
if (visitors.has("user123")) {
  console.log("This user has visited before");
}
