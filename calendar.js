var $ = function (id) { return document.getElementById(id); };

var getMonthText = function(currentMonth) {
    if (currentMonth === 0) { return "January"; }
    else if (currentMonth === 1) { return "February"; }
    else if (currentMonth === 2) { return "March"; }
    else if (currentMonth === 3) { return "April"; }
    else if (currentMonth === 4) { return "May"; }
    else if (currentMonth === 5) { return "June"; }
    else if (currentMonth === 6) { return "July"; }
    else if (currentMonth === 7) { return "August"; }
    else if (currentMonth === 8) { return "September"; }
    else if (currentMonth === 9) { return "October"; }
    else if (currentMonth === 10) { return "November"; }
    else if (currentMonth === 11) { return "December"; }
};

var getLastDayOfMonth = function(currentMonth) {
    switch (currentMonth) {
        case 1:
            return 28;
        case 3:
        case 5:
        case 8:
        case 10:
            return 30;
        default:
            return 31; 
    }
};

window.onload = function () {
    // Add month and year to "month_year" span element
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const monthName = getMonthText(currentMonth);
    const currentYear = currentDate.getFullYear();

    $("month_year").textContent = monthName + " " + currentYear;

    // Generate calendar in "calendar" table
    const calendarTable = $("calendar");
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const lastDayOfMonth = getLastDayOfMonth(currentMonth);
    let newRow = document.createElement("tr");
    let dayCounter = 0;

    // Add blank cells before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
        const blankCell = document.createElement("td");
        newRow.appendChild(blankCell);
        dayCounter++;
    }

    // Add the rest of the days
    for (let dayOfMonth = 1; dayOfMonth <= lastDayOfMonth; dayOfMonth++) {
        const newColumn = document.createElement("td");
        newColumn.textContent = dayOfMonth;
        newRow.appendChild(newColumn);
        dayCounter++;

        if (dayCounter % 7 === 0) {
            calendarTable.appendChild(newRow);
            newRow = document.createElement("tr");
        }
    }

    // Add blank cells if the month doesn't end on a Saturday
    if (dayCounter % 7 !== 0) {
        for (let i = dayCounter % 7; i < 7; i++) {
            const blankCell = document.createElement("td");
            newRow.appendChild(blankCell);
        }
        calendarTable.appendChild(newRow);
    }

};