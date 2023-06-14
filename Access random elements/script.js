function extractElements(array) {
    const [first, second, ...rest] = array;
    const last = rest.pop();
    return [first, second, last];
}

// Example usage
const inputArray = [1, 2, 3, 4, 5];
const extractedElements = extractElements(inputArray);
console.log(extractedElements);
