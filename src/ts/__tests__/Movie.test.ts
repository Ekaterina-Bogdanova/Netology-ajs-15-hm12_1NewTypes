import Buyable from '../domain/Buyable';
import Movie from '../domain/Movie'

test('number of arguments 8', () => {
  const avengers: Buyable = new Movie(1, 'Мстители', 'The Avengers', 2012, 'США', ['фантастика', 'боевик', 'фентези', 'приключения'], '137 мин.');

  const size: number = Object.keys(avengers).length;

  expect(size).toBe(8);
});

