function hello() {
  return 'Hello, world!';
}

test('hello returns Hello, world!', () => {
  expect(hello()).toBe('Hello, world!');
});
