async function loadStudents() {
    const status = document.getElementById("status");
    const tableBody = document.getElementById("students-body");

    try {
        const response = await fetch("/api/students");

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const students = await response.json();

        tableBody.innerHTML = "";

        students.forEach(student => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.course}</td>
            `;

            tableBody.appendChild(row);
        });

        status.textContent = `${students.length} students loaded`;
    } catch (error) {
        console.error("Failed to load students:", error);

        status.textContent = "Failed to load students";
    }
}

loadStudents();
