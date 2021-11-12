export const FormatPrice = (price) => {
    let resultPrice = new Intl.NumberFormat('en-US').format(price);
    return resultPrice;
}