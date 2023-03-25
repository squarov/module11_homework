export function getPercents(percent, number) {
    if (percent < 0 || number < 0) {
        alert('Значение отрицательное');
    } else if (percent === 0 || number === 0) {
        alert('Ноль');
    } else {
        alert(number / 100 * percent);
    }
}
getPercents(30, 200);