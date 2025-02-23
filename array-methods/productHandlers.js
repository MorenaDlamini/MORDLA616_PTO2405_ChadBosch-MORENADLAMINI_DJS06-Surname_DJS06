/**
 * Extracts product names from the list.
 * @param {Array} products - Array of product objects.
 * @returns {Array} Array of product names.
 */
export const getProductNames = (products) => products.map(({ product }) => product);

/**
 * Filters products by name length (<= 5 characters).
 * @param {Array} products - Array of product objects.
 * @returns {Array} Filtered array of short-named products.
 */
export const filterShortNamedProducts = (products) => products.filter(({ product }) => product.length <= 5);

/**
 * Calculates total price of valid products.
 * @param {Array} products - Array of product objects.
 * @returns {number} Total price of valid products.
 */
export const calculateTotalCost = (products) => {
    const validProducts = products.filter(({ price }) => price > 0);
    return validProducts.reduce((sum, { price }) => sum + price, 0);
};

/**
 * Finds the highest and lowest priced products.
 * @param {Array} products - Array of product objects.
 * @returns {Object} Object containing highest and lowest priced products.
 */
export const getPriceExtremes = (products) => {
    const validProducts = products.filter(({ price }) => price > 0);
    return {
        highest: validProducts.reduce((max, p) => (p.price > max.price ? p : max)),
        lowest: validProducts.reduce((min, p) => (p.price < min.price ? p : min)),
    };
};

/**
 * Converts products into an object mapping product names to their cost.
 * @param {Array} products - Array of product objects.
 * @returns {Object} Object mapping product names to their cost.
 */
export const mapProducts = (products) => Object.fromEntries(products.map(({ product, price }) => [product, { name: product, cost: price }]));

/**
 * Concatenates all product names into a single string.
 * @param {Array} products - Array of product objects.
 * @returns {string} Concatenated product names.
 */
export const concatenateProductNames = (products) => products.reduce((acc, { product }) => `${acc}, ${product}`, '').slice(2);