const PASS_1 = "Goddard Hall"
const PASS_2 = "Goddard"
const PASSWORD_TIMEOUT = 1;

function checkPassword() {
    let inputPassword = document.getElementById("location-password").value;
    if (!(inputPassword.trim().length === 0)) {
        // Not whitespace, check for correctness.
        if (inputPassword.toLowerCase() == PASS_1.toLowerCase() || inputPassword.toLowerCase() == PASS_2.toLowerCase()) {
            // Matched password!
            alert("Thanks, This is perfect! With the location of the lab determined, all that is left is to have our team of thieves raid the lab for the violet. Don’t worry, these people are professionals, so they will not get hurt. Wait until tomorrow for an update on their progress.")
        } else {
            // Wrong password, reset field.
            document.getElementById("location-password").value = "";
        }
    }
}