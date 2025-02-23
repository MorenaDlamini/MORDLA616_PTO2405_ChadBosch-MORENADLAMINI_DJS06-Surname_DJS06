import { products, provinces, names } from './dataSet.js';
import { getProductNames, filterShortNamedProducts, calculateTotalCost, getPriceExtremes, mapProducts, concatenateProductNames } from './productHandlers.js';
import { filterNonCapeProvinces, convertProvincesToUppercase, sortProvinces } from './provinceHandlers.js';
import { checkNamesContainS, anyNameContainsS, mapNameLengths, mapNamesToProvinces } from './nameHandlers.js';

// Basic exercises 
console.log("\nBasic Exercises:");

// 1. Map Names to Provinces
console.log("1. Name to Province Mapping:");
console.log(mapNamesToProvinces(names, provinces));

// 2. Convert Provinces to Uppercase
console.log("\n2. Uppercase Provinces:");
console.log(convertProvincesToUppercase(provinces));

// 3. Map Name Lengths
console.log("\n3. Name Lengths:");
console.log(mapNameLengths(names));

// 4. Sort Provinces
console.log("\n4. Sorted Provinces:");
console.log(sortProvinces(provinces));

// 5. Filter Non-Cape Provinces
console.log("\n5. Filtered Provinces (Non-Cape):");
console.log(filterNonCapeProvinces(provinces));

// 6. Check if Names Contain 'S'
console.log("\n6. Names Contain 'S':");
console.log(checkNamesContainS(names));

// 7. Check if Any Name Contains 'S'
console.log("\n7. Any Name Contains 'S':");
console.log(anyNameContainsS(names));

// Advanced exercises 
console.log("\nAdvanced Exercises:");
console.log({
    // 1. Log Products: logging each product name.
    loggedProducts: getProductNames(products),

    // 2. Filter by Name Length: This will filter out products with names longer than 5 characters.
    filteredProducts: filterShortNamedProducts(products),

    // 3. Price Manipulation: Filter out products without prices, convert string prices to numbers, and calculate the total price using reduce.
    totalCost: calculateTotalCost(products),

    // 4. Concatenate Product Names: Use reduce to concatenate all product names into a single string.
    concatenatedNames: concatenateProductNames(products),

    // 5. Find Extremes in Prices: Identify the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y."
    priceExtremes: getPriceExtremes(products),

    // 6. Object Transformation: Using Object.entries and reduce, recreate the products object with keys 'name' and 'cost', maintaining their original values.
    transformedProducts: Object.entries(mapProducts(products)).reduce((acc, [key, value]) => {
        acc.push({ name: key, cost: value.cost });
        return acc;
    }, [])
});

