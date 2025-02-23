/**
 * Filters out provinces containing 'Cape'.
 * @param {Array} provinces - Array of province names.
 * @returns {Array} Filtered array of provinces without 'Cape'.
 */
export const filterNonCapeProvinces = (provinces) => provinces.filter(province => !province.includes('Cape'));

/**
 * Converts province names to uppercase.
 * @param {Array} provinces - Array of province names.
 * @returns {Array} Array of uppercase province names.
 */
export const convertProvincesToUppercase = (provinces) => provinces.map(province => province.toUpperCase());

/**
 * Sorts provinces alphabetically.
 * @param {Array} provinces - Array of province names.
 * @returns {Array} Sorted array of provinces.
 */
export const sortProvinces = (provinces) => [...provinces].sort();