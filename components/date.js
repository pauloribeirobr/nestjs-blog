import parseISO from "date-fns/parseISO";
import format from "date-fns/format";

export default function Date({ dateString }) {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}