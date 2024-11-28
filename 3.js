function unique(array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (!result.includes(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

const result = unique([2, 1, 1, 3, 2]);
console.log(result);
// Result: [2, 1, 3]
const result1 = unique(['top', 'bottom', 'top', 'left', 'bottom']);
console.log(result1);
// Result: ['top', 'bottom', 'left']