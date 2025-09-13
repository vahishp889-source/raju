function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}

function validateEmail(email) {
    const pattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return pattern.test(email);
}

function showEmailError(msg) {
    const errorDiv = document.getElementById("emailError");
    if(errorDiv) errorDiv.textContent = msg;
}
