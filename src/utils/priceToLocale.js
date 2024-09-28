export const priceToLocale = (value) => {
    const parsedValue = parseFloat(value);
    const costNumber = parsedValue == value ? `$${parsedValue.toLocaleString()}` : value;
    return costNumber;
}