async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!response.ok) {
    throw new Error('[REQUEST_ERROR]');
  }

  return response.json();
}

export { getUsers };
