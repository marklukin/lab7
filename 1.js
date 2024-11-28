function removeElement(array, item) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(array[i]);
        if (array[i] === item) {
            result.pop(array[i])
        }
    }
    return result;
}

const array = [1, 2, 3, 4, 5, 6, 7];
console.log(removeElement(array, 5));
// Результат: [1, 2, 3, 4, 6, 7]
const array2 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
console.log(removeElement(array2, 'Lima')); // удалит 'Lima' из массива
console.log(removeElement(array2, 'Berlin')); // не удалит ничего