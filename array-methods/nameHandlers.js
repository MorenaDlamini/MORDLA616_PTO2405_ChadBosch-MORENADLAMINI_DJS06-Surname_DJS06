/**
 * Checks if each name contains the letter 'S'.
 * @param {Array} names - Array of names.
 * @returns {Array} Boolean array indicating presence of 'S' in each name.
 */
export const checkNamesContainS = (names) => names.map(name => name.toLowerCase().includes('s'));

/**
 * Determines if any name contains the letter 'S'.
 * @param {Array} names - Array of names.
 * @returns {boolean} True if at least one name contains 'S', otherwise false.
 */
export const anyNameContainsS = (names) => names.some(name => name.toLowerCase().includes('s'));

/**
 * Maps names to their respective lengths.
 * @param {Array} names - Array of names.
 * @returns {Array} Array of name lengths.
 */
export const mapNameLengths = (names) => names.map(({ length }) => length);

/**
 * Creates an object mapping names to their respective provinces.
 * @param {Array} names - Array of names.
 * @param {Array} provinces - Array of province names.
 * @returns {Object} Object mapping names to provinces.
 */
export const mapNamesToProvinces = (names, provinces) => Object.fromEntries(names.map((name, index) => [name, provinces[index] || 'No matching province']));