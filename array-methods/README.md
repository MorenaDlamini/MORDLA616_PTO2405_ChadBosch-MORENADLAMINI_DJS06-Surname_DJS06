# 🔃Project Overview
This project consists of JavaScript functions that perform various operations on arrays of products, provinces, and names. It demonstrates the use of array methods such as `map`, `filter`, `reduce`, and `sort`.

## 👨‍💻How to Run the Project in Node.js

1. Ensure you have [Node.js](https://nodejs.org/) installed on your system.
2. Clone or download this repository.
3. Open a terminal and navigate to the project directory named array-methods.
4. Run the following command to execute the script:
   ```sh
   node main.js
   ```

## 📂Folder Structure
```
array-methods/
│── data.js                # Contains the dataset for products, provinces, and individual names
│── productHandlers.js      # Functions for handling product-related operations
│── provinceHandlers.js     # Functions for handling province-related operations
│── nameHandlers.js         # Functions for handling name-related operations
│── main.js                 # Main script that imports modules and executes operations
│── README.md               # Documentation for project breakdown and how to execute the code
```

## 📝Approach for Exercises

### 1. ForEach Basics
- Logs each name and each province.
- Combines names and provinces into a formatted string (`"Name (Province)"`).

### 2. Uppercase Transformation
- Uses `map` to convert province names to uppercase.

### 3. Name Lengths
- Uses `map` to get the length of each name.

### 4. Sorting
- Uses `sort` to arrange provinces alphabetically.

### 5. Filtering Cape
- Uses `filter` to remove provinces containing "Cape" and logs the count of the remaining ones.

### 6. Finding 'S'
- Uses `map` to create a boolean array indicating if a name contains the letter 'S'.
- Uses `some` to check if at least one name contains 'S'.

### 7. Creating Object Mapping
- Uses `reduce` to create an object mapping names to provinces.

### Advanced Exercises (Single Console.log Execution)
- **Log Products**: Iterates and logs product names.
- **Filter by Name Length**: Filters out products with names longer than 5 characters.
- **Price Manipulation**: Filters out products without prices, converts string prices to numbers, and calculates the total price using `reduce`.
- **Join Product Names**: Uses `reduce` to join all product names.
- **Find Extremes in Prices**: Identifies highest and lowest-priced products.
- **Object Transformation**: Uses `Object.entries` and `reduce` to structure the products object with `name` and `cost` keys.

