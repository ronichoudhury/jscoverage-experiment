import test from 'tape';
import rabbit from '../src/rabbit';

test('rabbit', (t) => {
  t.equals(rabbit(4, 5), 9);
  t.end();
});
