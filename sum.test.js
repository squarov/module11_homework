import {getPercents} from '/a.js';

describe('tests for fetPercents function', () => {
    it('should operate correctly while both arguments are positive', () => {
        expect(getPercents(30, 200)).toBe('number / 100 * percent');
    }),
    it('should operate correctly if one of the agruments is negative', () => {
        expect(getPercents(-30, 200)).toBe(`number / 100 * percent`);
    }),
    it('should operate correctly if one of the agruments or both of them are zero', () => {
        expect(getPercents(30, 200)).toBe('Ноль');
    });
});