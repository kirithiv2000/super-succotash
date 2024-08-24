// Select all elements with the given CSS selector for names
const nameElements = document.querySelectorAll("#screener-table > table > tbody > tr > td.jsx-427622308.data-col.data-cell.highlight-onhover.typography-body-medium-m > span > span");

// Extract inner text from each name element
const data = Array.from(nameElements).map(element => ({
    name: element.innerText.trim()
}));

// Select all elements with the given CSS selector for AUM values
const aumElements = document.querySelectorAll("#screener-table > table > tbody > tr > td.jsx-427622308.aum-col.text-right > span > span.jsx-427622308.desktop--only");

// Map AUM values to the existing data
data.forEach((item, index) => {
    if (aumElements[index]) {
        item.aum = `"${aumElements[index].innerText.trim()}"`; // Wrap AUM value in quotes
    }
});

// Select all elements with the given CSS selector for expense ratio values
const expRatioElements = document.querySelectorAll("#screener-table > table > tbody > tr > td.jsx-427622308.expRatio-col.text-right > span > span.jsx-427622308.desktop--only");

// Map expense ratio values to the existing data
data.forEach((item, index) => {
    if (expRatioElements[index]) {
        item.expRatio = `"${expRatioElements[index].innerText.trim()}"`; // Wrap expRatio value in quotes
    }
});

// Select all elements with the given CSS selector for tracking error values
const trackErrElements = document.querySelectorAll("#screener-table > table > tbody > tr > td.jsx-427622308.trackErr-col.text-right > span > span.jsx-427622308.desktop--only");

// Map tracking error values to the existing data
data.forEach((item, index) => {
    if (trackErrElements[index]) {
        item.trackErr = `"${trackErrElements[index].innerText.trim()}"`; // Wrap trackErr value in quotes
    }
});

// Convert the data to CSV format
const csvRows = [];
csvRows.push(['name', 'aum', 'expRatio', 'trackErr']); // Header row

data.forEach(row => {
    csvRows.push([
        `"${row.name || ''}"`, // Wrap name value in quotes
        row.aum || '', 
        row.expRatio || '', 
        row.trackErr || ''
    ]);
});

// Join rows with new line characters and log the CSV string to the console
const csvString = csvRows.map(row => row.join(',')).join('\n');

console.log(csvString);
