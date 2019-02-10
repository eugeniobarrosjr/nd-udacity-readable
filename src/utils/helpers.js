import { format } from 'date-fns';

const formatTimestamp = timestamp => format(new Date(timestamp), 'MM/DD/YYYY');

export { formatTimestamp };
