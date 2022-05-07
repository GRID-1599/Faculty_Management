export function dateFormater(dateToBeFormat) {
  let theDate = new Date(dateToBeFormat);
  // console.log("x " + theDate.getDate().toString().length);
  let formatted_date =
    theDate.getFullYear() +
    "-" +
    (theDate.getMonth() + 1) +
    "-" +
    (theDate.getDate().toString().length <= 1
      ? "0" + theDate.getDate()
      : theDate.getDate());
  return formatted_date;
}

export function dateFormatStringSet(dateToBeFormat) {
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let theDate = new Date(dateToBeFormat);
  // console.log("x " + theDate.getDate().toString().length);
  let formatted_date =
    month[theDate.getMonth()] +
    ". " +
    (theDate.getDate().toString().length <= 1
      ? "0" + theDate.getDate()
      : theDate.getDate()) +
    ", " +
    theDate.getFullYear();
  return formatted_date;
}
