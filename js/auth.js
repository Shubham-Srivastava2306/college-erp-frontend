document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const role = document.querySelector('input[name="role"]:checked');
    if (!role) {
        alert("Please select a role!");
        return;
    }

    const selectedRole = role.value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // TEMP LOGIN LOGIC (Replace with backend later)
    if (selectedRole === "admin") {
        if (username === "admin" && password === "admin123") {
            window.location.href = "admin-dashboard.html";
        } else {
            alert("Invalid Admin Login");
        }
    }

    else if (selectedRole === "student") {
        if (username.startsWith("STU")) {
            window.location.href = "student-dashboard.html";
        } else {
            alert("Invalid Student Login");
        }
    }

    else if (selectedRole === "faculty") {
        if (username.startsWith("FAC")) {
            window.location.href = "faculty-dashboard.html";
        } else {
            alert("Invalid Faculty Login");
        }
    }

});
