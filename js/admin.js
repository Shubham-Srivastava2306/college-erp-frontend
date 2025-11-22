 
// Student registration
document.getElementById("studentForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("stuName").value;
  const roll = document.getElementById("stuRoll").value;
  const dept = document.getElementById("stuDept").value;
  const sem = document.getElementById("stuSem").value;
  const section = document.getElementById("stuSection").value;

  const output = `Student Registered: ${name} (Roll: ${roll}, Dept: ${dept}, Sem: ${sem}, Section: ${section})`;
  document.getElementById("studentOutput").innerText = output;
});

// Faculty registration
document.getElementById("facultyForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("facName").value;
  const empId = document.getElementById("facEmpId").value;
  const dept = document.getElementById("facDept").value;

  const output = `Faculty Registered: ${name} (EmpID: ${empId}, Dept: ${dept})`;
  document.getElementById("facultyOutput").innerText = output;
});
// Timetable management
document.getElementById("timetableForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const term = document.getElementById("term").value;
  const day = document.getElementById("day").value;
  const start = document.getElementById("startTime").value;
  const end = document.getElementById("endTime").value;
  const subject = document.getElementById("subject").value;
  const faculty = document.getElementById("faculty").value;
  const room = document.getElementById("room").value;

  const entry = `Term: ${term}, Day: ${day}, ${start}-${end}, Subject: ${subject}, Faculty: ${faculty}, Room: ${room}`;
  
  // Display entry (simulate saving)
  const outputDiv = document.getElementById("timetableOutput");
  const p = document.createElement("p");
  p.innerText = entry;
  outputDiv.appendChild(p);

  // Reset form
  e.target.reset();
});
