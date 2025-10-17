const users: Set<string> = new Set();
users.add("Alice").add("Bob").add("David").add("Alice");
console.log(users);
console.log(users.size);

const visitors: Set<string> = new Set();
visitors.add("user123").add("user345");
if (visitors.has("user123")) {
  console.log("This user has visited before");
}

let library: Set<string> = new Set(); // Tracks unique book titles

library.add("War and Peace");
library.add("1984");
library.add("1984");
library.add("1984");
library.add("1984");
library.add("Pride and Prejudice");

console.log(library.has("War and Peace")); // Should log 'true'
console.log(library);
console.log(library.size);

const bookCollection: Set<string> = new Set();
bookCollection.add("The Great Gatsby").add("To Kill a Mockingbird");
console.log(bookCollection.size);
