const BIN_ID = "68c6497143b1c97be94253aa";  
const API_KEY = "$2a$10$y2e0gE1zi.GGk87wMFo1beNRQHSqtAczn.z.dmWlglp8iggw/l8Zy";  
const BASE_URL = "https://api.jsonbin.io/v3/b/68c65438d0ea881f407d474d";

// Save all grievances to JSONBin
async function saveGrievances(grievances) {
  await fetch(BASE_URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key": API_KEY
    },
    body: JSON.stringify(grievances)
  });
}

// Load grievances from JSONBin
async function loadGrievances() {
  const res = await fetch(`${BASE_URL}/latest`, {
    headers: { "X-Master-Key": API_KEY }
  });
  const data = await res.json();
  return data.record || [];
}

// Logout function
function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}

// Validate email (only Gmail allowed)
function validateEmail(email) {
  const pattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  return pattern.test(email);
}

function showEmailError(msg) {
  const errorDiv = document.getElementById("emailError");
  if (errorDiv) errorDiv.textContent = msg;
}

