export default function Currency() {
    const brazilianCurrency = new Intl.NumberFormat('pt-Br', {
        style: 'currency',
        currency: 'BRL',
    });

    return [brazilianCurrency];
}
