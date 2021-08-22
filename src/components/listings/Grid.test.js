/* eslint-disable linebreak-style */
import data from '../../data/courses.json';

// eslint-disable-next-line no-undef
describe('Number tests', () => {
  // eslint-disable-next-line no-undef
  test('check the count is 12', () => {
    // eslint-disable-next-line no-undef
    expect(data.length).toBe(12);
  });

  // eslint-disable-next-line no-undef
  test('Number of items to be greater than or equal to 12', () => {
    // eslint-disable-next-line no-undef
    expect(data.length).toBeGreaterThanOrEqual(12);
  });
});

// eslint-disable-next-line no-undef
describe('String tests', () => {
  // eslint-disable-next-line no-undef
  test('There is JS in the Title', () => {
    // eslint-disable-next-line no-undef
    expect(data[0].title).toMatch(/JS/);
  });

  // eslint-disable-next-line no-undef
  test('The React contains in the Title', () => {
    // eslint-disable-next-line no-undef
    expect(data[0].title).toContain('React');
  });
});

// test array conatining elements
const data2 = ['React Native', 'React'];

// eslint-disable-next-line no-undef
describe('Array and object tests', () => {
  // eslint-disable-next-line no-undef
  test('The list of course conatining React Native and React', () => {
    // eslint-disable-next-line no-undef
    expect(['React Native', 'React', 'Angular']).toEqual(expect.arrayContaining(data2));
  });
  // eslint-disable-next-line no-undef
  test('The array object have property title', () => {
    // eslint-disable-next-line no-undef
    expect(data[0]).toHaveProperty('title');
  });
  // eslint-disable-next-line no-undef
  test('The array object have property views and have value 31266', () => {
    // eslint-disable-next-line no-undef
    expect(data[0]).toHaveProperty('views');
    // eslint-disable-next-line no-undef
    expect(data[0].views).toEqual('31,266');
  });
});
