/**
 * Returns todays date in yyyy-mm-dd format
 */
function getToday () {
    return parseDate(new Date());
}
/**
 * Parse Date object to string in yyyy-mm-dd format
 */
function parseDate (date) {
    let year, month, day;
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
    if(month < 10) {
        month = '0'+month;
    }
    if(day < 10) {
        day = '0'+day;
    }
    return `${year}-${month}-${day}`;
}

export {getToday, parseDate}