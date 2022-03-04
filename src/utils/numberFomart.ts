export function numberFormat (value: any) {
    return Intl.NumberFormat('pt-BR', { style: "currency", currency: "BRL" }).format(value);
}