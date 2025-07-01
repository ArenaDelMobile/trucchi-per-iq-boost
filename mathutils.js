/**
 * mathutils - Basic Math Utility Functions
 * Author: ArenaDelMobile
 * License: Custom
 */

const mathutils = {
    /**
     * Calculates the average of an array of numbers.
     * @param {number[]} numbers - Array of numbers.
     * @returns {number}
     */
    average(numbers) {
        if (!Array.isArray(numbers) || numbers.length === 0 || !numbers.every(n => typeof n === 'number')) {
            console.error('[mathutils] Invalid input. Expected a non-empty array of numbers.');
            return NaN;
        }
        const sum = numbers.reduce((acc, n) => acc + n, 0);
        return sum / numbers.length;
    },

    /**
     * Generates a random integer between min and max (inclusive).
     * @param {number} min - Minimum value.
     * @param {number} max - Maximum value.
     * @returns {number}
     */
    randomInt(min, max) {
        if (typeof min !== 'number' || typeof max !== 'number' || min > max) {
            console.error('[mathutils] Invalid parameters.');
            return NaN;
        }
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    /**
     * Rounds a number to a specified number of decimal places.
     * @param {number} num - Number to round.
     * @param {number} decimals - Number of decimal places.
     * @returns {number}
     */
    round(num, decimals = 0) {
        if (typeof num !== 'number' || typeof decimals !== 'number' || decimals < 0) {
            console.error('[mathutils] Invalid parameters.');
            return NaN;
        }
        const factor = Math.pow(10, decimals);
        return Math.round(num * factor) / factor;
    }
};

// Example usage:
// console.log(mathutils.average([10, 20, 30])); // 20
// console.log(mathutils.randomInt(1, 100)); // random integer between 1 and 100
// console.log(mathutils.round(3.14159, 2)); // 3.14

module.exports = mathutils;
