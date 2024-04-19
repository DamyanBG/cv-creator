// Get the month name
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


export const formatDate = (dateString) => {
    if (dateString === "Now") return dateString
    const date = new Date(dateString);
    const monthName = monthNames[date.getMonth()];

    // Get the year
    const year = date.getFullYear();

    // Combine month and year
    const formattedDate = `${monthName} ${year}`;
    return formattedDate
}