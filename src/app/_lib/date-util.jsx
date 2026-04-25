export function formatDate(date) {
    if (date instanceof Date) {
        date = date.toISOString();
    }
    if (!date || typeof date !== "string") return null;

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",
    ];

    function getOrdinalSuffix(n) {
        if (n > 3 && n < 21) return "th";
        switch (n % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    }

    try {
        const dateString = date.includes("T") ? date.split("T")[0] : date.substring(0, 10);
        const [year, month, day] = dateString.split("-");
        const dayNumber = parseInt(day, 10);
        return `${dayNumber}${getOrdinalSuffix(dayNumber)} ${months[parseInt(month, 10) - 1]}, ${year}`;
    } catch (err) {
        console.log(`Error formatting date ${date}:`, err);
        return null;
    }
}
