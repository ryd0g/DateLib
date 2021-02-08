const lib = require('../src/index');
const T = new lib();

test('get year', () => {
  expect(T.year).toBe(2021);
});
test('get short year', () => {
  expect(T.yr).toBe('21');
});
test('get month', () => {
  expect(T.month).toBe('February');
});
test('get shorter month', () => {
  expect(T.mon).toBe('Feb');
});
test('get day', () => {
  expect(T.day).toBe('Tuesday');
});
test('get short day', () => {
  expect(T.dy).toBe('Tue');
});
test('get the date', () => {
  expect(T.date).toBe(8);
});
test('get the hours', () => {
  expect(T.hours).toBe(12);
});
test('get the minutes', () => {
  expect(T.mins).toBe(14);
});
test('get the seconds', () => {
  expect(T.secs).toBe(13);
});

describe('Format', () => {
  const d = new D(2021, 1, 8, 3, 4, 5);

  test('D.format() - default format', () => {
    expect(d.format()).toBe('2021 February 08');
  });

  test('D.format()', () => {
    expect(d.format('M d Y')).toBe('February 8 2021');
    expect(d.format('M, d Y')).toBe('February, 8 2021');
    expect(d.format('y/m/d')).toBe('21/Feb/8');
    expect(d.format('H:I:S')).toBe('12:18:05');
    expect(d.format('h:i:s')).toBe('12:18:5');
    expect(d.format('Y-M-D h:I:S')).toBe('2021-February-08 12:18:05');
  });
});
