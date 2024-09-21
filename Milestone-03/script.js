// Get references to the form and Display area
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("Resume-display");
//Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent page relaod
    //collection input value
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // Generate the Resume Content dynamically
    var resumeHTML = "\n    <h2><b>resume</b></h2>\n    <h3>Personal Information</h3>\n     <p><b>name:</b>".concat(name, "</p>\n    <p><b>email:</b>").concat(email, "</p>\n   <p><b>Phone:</b>").concat(phone, "</p>\n\n   <h3>education</h3>\n   <p3>").concat(education, "</p>\n\n   <h3>experience</h3>\n   <p3>").concat(experience, " </p>\n\n   <h3>skills</h3>\n   <p3>").concat(skills, " </p>\n    ");
    // Display the Generate resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume Display Element is Missing");
    }
});
