/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rate per day
 */
export const dayRate = (ratePerHour, discount = 0) => ratePerHour * 8 * (1 - discount);

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export const daysInBudget = (budget, ratePerHour) => Math.floor(budget / dayRate(ratePerHour));

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export const priceWithMonthlyDiscount = (ratePerHour, numDays, discount) => {
    const daysWithoutDiscount = numDays % 22;
    const daysWithDiscount = numDays - daysWithoutDiscount;
    return Math.ceil(dayRate(ratePerHour, discount) * daysWithDiscount + dayRate(ratePerHour) * daysWithoutDiscount);
}
