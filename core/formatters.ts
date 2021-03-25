const numberFormatter = new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
});

const numberFormatterWithCurrency = (maximumFractionDigits = 2) =>
    new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0,
        maximumFractionDigits,
    });

export function formatNumber(
    rawNumber: number | string,
    isCurrency = false,
    maximumFractionDigits = 0,
) {
    if (rawNumber === undefined) {
        return rawNumber;
    }

    let temp = rawNumber;
    if (typeof temp === 'string') {
        temp = Number.parseFloat(temp);
    }

    if (isCurrency) {
        return numberFormatterWithCurrency(maximumFractionDigits).format(temp);
    }

    return numberFormatter.format(temp);
}
