function removeElement(array, ...items) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (!items.includes(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

const array = [1, 2, 3, 4, 5, 6, 7];
console.log(removeElement(array, 5, 1, 6)); // => [ 2, 3, 4, 7 ]

const array2 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
console.log(removeElement(array2, 'Lima', 'Berlin', 'Kiev')); // => [ 'Beijing', 'Saratov' ]
