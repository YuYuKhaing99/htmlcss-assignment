 let start = Number(prompt("Enter the beginning year:"));
    let end = Number(prompt("Enter the ending year:"));

    document.write("<ul>");

    for (let year = start; year <= end; year++) {
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
            document.write("<li>" + year + "</li>");
        }
    }

    document.write("</ul>");
