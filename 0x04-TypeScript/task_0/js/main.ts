(() => {
  interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }

  const student1: Student = {
    firstName: "Alice",
    lastName: "Johnson",
    age: 22,
    location: "Nairobi"
  };

  const student2: Student = {
    firstName: "Bob",
    lastName: "Smith",
    age: 25,
    location: "Mombasa"
  };

  const studentsList: Student[] = [student1, student2];

  const table = document.createElement("table");
  const tableHead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  const headers = ["First Name", "Location"];

  headers.forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    headerRow.appendChild(th);
  });
  tableHead.appendChild(headerRow);
  table.appendChild(tableHead);

  const tableBody = document.createElement("tbody");

  studentsList.forEach((student) => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  document.body.appendChild(table);
})();
