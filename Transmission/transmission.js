const LOCATION_PASSWORD = "wpi"
const PASSWORD_TIMEOUT = 1;

function checkPassword() {
    let inputPassword = document.getElementById("location-password").value;
    if (!(inputPassword.trim().length === 0)) {
        // Not whitespace, check for correctness.
        if (inputPassword.toLowerCase() === LOCATION_PASSWORD.toLowerCase()) {
            // Matched password!
            window.location = "location-found-546392";
        } else {
            // Wrong password, reset field.
            document.getElementById("location-password").value = "";
        }
    }
}