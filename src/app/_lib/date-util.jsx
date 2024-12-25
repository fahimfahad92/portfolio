export function formatDate(date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let dateString = date.toISOString().split("T")[0];

  const [year, month, day] = dateString.split("-");

  // Function to determine ordinal suffix
  function getOrdinalSuffix(n) {
    if (n > 3 && n < 21) return "th"; // For 11th to 13th
    switch (n % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  const dayNumber = parseInt(day, 10);
  const ordinalSuffix = getOrdinalSuffix(dayNumber);
  const monthName = months[parseInt(month, 10) - 1];

  return `${dayNumber}${ordinalSuffix} ${monthName}, ${year}`;
}
