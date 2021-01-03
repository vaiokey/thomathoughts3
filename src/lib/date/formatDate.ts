import {DateFormat} from "../../types/date.d";
import {format, parseISO} from "../deps/date-fns";

export function formatDate(dateString: DateFormat): string {
	const date = parseISO(dateString);
	return format(date, "LLLL d, yyyy");
}
