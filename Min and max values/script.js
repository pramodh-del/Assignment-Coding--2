function findMinMax(array) {
    const max = Math.max(...array);
    const min = Math.min(...array);
    return { max, min };
}

// Example usage
const inputArray = [5, 2, 7, 1, 9];
const result = findMinMax(inputArray);
console.log(result);
