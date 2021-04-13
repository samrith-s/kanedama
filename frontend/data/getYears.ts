export function getYears(upto = 4) {
    const currentYear = new Date().getFullYear();
    const years = [currentYear];

    for (let i = 1; i <= upto; i++) {
        years.push(currentYear - i);
    }

    return { years, currentYear };
}
