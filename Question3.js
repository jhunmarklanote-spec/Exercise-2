function areValuesUnique(numbers) {
    const uniqueNumbers = new Set(numbers);
    return uniqueNumbers.size === numbers.length;
}
