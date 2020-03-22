import { createQueryStrings, formatUrl } from '../util';

describe('util test', () => {
  test('query strings', () => {
    const querystrings = createQueryStrings({ direction: 'test', zzz: 'abc' });
    expect(querystrings).toBe('direction=test&zzz=abc');
  });
  test('format url', () => {
    const data = [
      {
        input: '1.1.1.1',
        http: 'http://1.1.1.1:8080',
        ws: 'ws://1.1.1.1:19131'
      },
      {
        input: '/connect 1.1.1.1:19131',
        http: 'http://1.1.1.1:8080',
        ws: 'ws://1.1.1.1:19131'
      }
    ];
    data.forEach(d => {
      const result = formatUrl(d.input);
      expect(result.http).toBe(d.http);
      expect(result.ws).toBe(d.ws);
    });
  });
});
