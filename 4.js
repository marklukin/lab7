function difference(array1, array2) {
    const result = [];
    for (let i = 0; i < array1.length; i++) {
        if (!array2.includes(array1[i])) {
            result.push(array1[i]);
        }
    }
    return result;
}

const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const result = difference(array1, array2);
console.log(result);
// Результат: [7, -2, 5]

const array3 = ['Beijing', 'Kiev'];
const array4 = ['Kiev', 'London', 'Baghdad', 5];
const result1 = difference(array3, array4);
console.log(result1);
// Результат: ['Beijing']