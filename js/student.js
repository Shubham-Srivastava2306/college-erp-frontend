 function openChatbot() {
  document.getElementById("chatbotBox").style.display = "block";
}

function sendQuery() {
  const q = document.getElementById("chatInput").value;
  let answer = "I don't understand yet.";
  if (q.toLowerCase().includes("attendance")) answer = "Your attendance is 85%.";
  if (q.toLowerCase().includes("marks")) answer = "You scored 75 in Math.";
  if (q.toLowerCase().includes("timetable")) answer = "You have Physics at 10 AM.";
  document.getElementById("chatOutput").innerText = answer;
}

