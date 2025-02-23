import { products, provinces, names } from './dataSet.js';
import { getProductNames, filterShortNamedProducts, calculateTotalCost, getPriceExtremes, mapProducts, concatenateProductNames } from './productHandlers.js';
import { filterNonCapeProvinces, convertProvincesToUppercase, sortProvinces } from './provinceHandlers.js';
import { checkNamesContainS, anyNameContainsS, mapNameLengths, mapNamesToProvinces } from './nameHandlers.js';

// Basic exercises 
console.log("\nbasic Exercises:");
console.log({
    nameProvinceMapping: mapNamesToProvinces(names, provinces),
    uppercaseProvinces: convertProvincesToUppercase(provinces),
    nameLengths: mapNameLengths(names),
    sortedProvinces: sortProvinces(provinces),
    filteredProvinces: filterNonCapeProvinces(provinces),
    namesContainS: checkNamesContainS(names),
    anyNameHasS: anyNameContainsS(names),
});

// Advanced exercises 
console.log("\nAdvanced Exercises:");
// 1. Log Products:logging each product name.
console.log("1. Log Products:");
getProductNames(products).forEach(product => console.log(product));

// 2. Filter by Name Length: This will filter out products with names longer than 5 characters.
console.log("\n2. Filter by Name Length:");
console.log(filterShortNamedProducts(products));

// 3. Price Manipulation: Filter out products without prices, convert string prices to numbers, and calculate the total price using reduce.
console.log("\n3. Price Manipulation:");
console.log("Total Cost:", calculateTotalCost(products));

// 4. Concatenate Product Names: Use reduce to concatenate all product names into a single string.
console.log("\n4. Concatenate Product Names:");
console.log(concatenateProductNames(products));

// 5. Find Extremes in Prices: Identify the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y."
console.log("\n5. Find Extremes in Prices:");
const extremes = getPriceExtremes(products);
console.log(`Highest: ${extremes.highest.product} (${extremes.highest.price}). Lowest: ${extremes.lowest.product} (${extremes.lowest.price}).`);

// 6. Object Transformation: Using Object.entries and reduce, recreate the products object with keys 'name' and 'cost', maintaining their original values.
console.log("\n6. Object Transformation:");
const transformedProducts = Object.entries(mapProducts(products)).reduce((acc, [key, value]) => {
    acc.push({ name: key, cost: value.cost });
    return acc;
}, []);
console.log(transformedProducts);

