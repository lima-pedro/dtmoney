export function dateFormat (date: Date) {
    return new Intl.DateTimeFormat().format(date);
}