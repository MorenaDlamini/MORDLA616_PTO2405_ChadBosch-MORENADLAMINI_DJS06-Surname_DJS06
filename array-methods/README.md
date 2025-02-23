# Project Overview

This project consists of JavaScript functions that perform various operations on arrays of products, provinces, and names. It demonstrates the use of array methods such as `map`, `filter`, `reduce`, and `sort` to manipulate data efficiently.

## Table of Contents

- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Approach for Exercises](#approach-for-exercises)
  - [1. ForEach Basics](#1-foreach-basics)
  - [2. Uppercase Transformation](#2-uppercase-transformation)
  - [3. Name Lengths](#3-name-lengths)
  - [4. Sorting](#4-sorting)
  - [5. Filtering Cape](#5-filtering-cape)
  - [6. Finding 'S'](#6-finding-s)
  - [7. Creating Object Mapping](#7-creating-object-mapping)
  - [Advanced Exercises](#advanced-exercises)
- [Additional Notes](#additional-notes)

## Getting Started

### Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS recommended)

### Installation & Execution

1. Clone this repository:
   ```sh
   git clone <repository-url>
   cd <repository-folder>
   ```
2. Open a terminal in the project directory.
3. Run the following command to execute the script:
   ```sh
   node main.js
   ```

## Folder Structure

```
array-methods/
│── data.js               # Contains sample datasets for products, provinces, and names
│── productHandlers.js    # Functions for handling product-related operations
│── provinceHandlers.js   # Functions for handling province-related operations
│── nameHandlers.js       # Functions for handling name-related operations
│── main.js               # Main script that imports modules and executes operations
│── README.md             # Project documentation
```

## Approach for Exercises

### 1. ForEach Basics
- Logs each name and province.
- Combines names and provinces into a formatted string (`"Name (Province)"`).

### 2. Uppercase Transformation
- Uses `map` to convert province names to uppercase.

### 3. Name Lengths
- Uses `map` to retrieve the length of each name.

### 4. Sorting
- Uses `sort` to arrange provinces alphabetically.

### 5. Filtering Cape
- Uses `filter` to remove provinces containing "Cape" and logs the count of the remaining ones.

### 6. Finding 'S'
- Uses `map` to create a boolean array indicating if a name contains the letter 'S'.
- Uses `some` to check if at least one name contains 'S'.

### 7. Creating Object Mapping
- Uses `reduce` to create an object mapping names to provinces.

### Advanced Exercises (Single `console.log` Execution)

#### Log Products
- Iterates and logs product names.

#### Filter by Name Length
- Filters out products with names longer than 5 characters.

#### Price Manipulation
- Filters out products without prices, converts string prices to numbers, and calculates the total price using `reduce`.

#### Concatenate Product Names
- Uses `reduce` to concatenate all product names.

#### Find Extremes in Prices
- Identifies the highest and lowest-priced products.

#### Object Transformation
- Uses `Object.entries` and `reduce` to structure the products object with `name` and `cost` keys.

## Additional Notes

- Ensure all dependencies are installed before running the project.
- The `data.js` file contains the sample dataset used for testing.
- Each handler file (`productHandlers.js`, `provinceHandlers.js`, `nameHandlers.js`) contains specific functions related to its respective data type.
- The `main.js` file serves as the entry point that imports and executes the functions.

---


