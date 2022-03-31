/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import GameSavingLoader from '../app.js';

test('the data is peanut butter', () => {
  const testClass = new GameSavingLoader();
  return testClass.load().then((data) => {
    expect(data).toEqual({
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1, name: 'Hitman', level: 10, points: 2000,
      },
    });
  });
});
