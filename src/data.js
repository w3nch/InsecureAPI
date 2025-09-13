export let users = [
  { id: 1, username: 'alice', password: 'pass123', isAdmin: false, ssn: '123-45-6789', salary: 50000 },
  { id: 2, username: 'bob', password: 'password', isAdmin: true, ssn: '987-65-4321', salary: 100000 }
];

export let tasks = [
  { id: 1, title: 'Task 1', description: 'Do something', userId: 1, isApproved: false },
  { id: 2, title: 'Task 2', description: 'Do something else', userId: 2, isApproved: true }
];

export let transactions = [
  { id: 1, amount: 1000, userId: 1 },
  { id: 2, amount: 5000, userId: 2 }
];

console.log('Dummy data seeded!');
