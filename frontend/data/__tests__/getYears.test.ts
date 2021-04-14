import { getYears } from '~data/getYears';

describe('getYears', () => {
    it('should return the correct years', () => {
        const years = getYears();
        expect(years.years).toEqual([2021, 2020, 2019, 2018, 2017]);
        expect(years.currentYear).toEqual(2021);
    });

    it('should return correct years for range', () => {
        const years = getYears(2);
        expect(years.years).toEqual([2021, 2020, 2019]);
    });
});
