// Reusable function to get form values
function getFormData() {
    return {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        department: document.getElementById("department").value.trim(),
        year: document.getElementById("year").value.trim(),
        projectTitle: document.getElementById("projectTitle").value.trim()
    };
}

// Store students in an array
let students = [];

// Handle form submission
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let data = getFormData();

    // Validation
    if (Object.values(data).some(field => !field)) {
        alert("Please fill all fields.");
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(data.email)) {
        alert("Please enter a valid email.");
        return;
    }

    // Add to array
    students.push(data);

    // Update UI
    displayStudents();

    // Clear form
    this.reset();
});

// Function to display students dynamically
function displayStudents() {
    let studentList = document.getElementById("studentList");
    studentList.innerHTML = "";

    students.forEach((student, index) => {
        let div = document.createElement("div");
        div.classList.add("student-card");
        div.innerHTML = `
            <strong>${student.name}</strong> (${student.year})<br>
            ${student.department} - ${student.projectTitle}
        `;
        
        // Click event for each card
        div.addEventListener("click", () => {
            div.classList.toggle("highlight");
            alert(`${student.name}'s email: ${student.email}`);
        });

        studentList.appendChild(div);
    });
}
