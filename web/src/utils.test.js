import { parseDate } from './utils';

it('provides correct date string', () => {
    let date = new Date('2019-01-01');
    expect(parseDate(date)).toBe('2019-01-01');
})