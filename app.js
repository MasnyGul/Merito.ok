function sayHello(user) {
  return `Hello, ${user.firstName}!`;
}
console.log(sayHello({ firstName: "Anna" }));