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
    var resumeHTML = "\n    <h2><b> Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n     <p><b>name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>email:</b><span contenteditable=\"true\">").concat(email, "</span</p>\n   <p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n <h3>Education</h3>  \n      <p contenteditable=\"true\">").concat(education, "</p>\n      <h3>Expirence</h3>\n   <p contenteditable=\"true\">").concat(experience, " </p>\n   <h3>Skills</h3>\n    <p contenteditable=\"true\">").concat(skills, " </p>\n    ");
    // Display the Generate resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume Display Element is Missing");
    }
});
