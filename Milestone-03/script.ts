// Get references to the form and Display area
const form = document.getElementById("resume-form") as HTMLFormElement
const resumeDisplayElement = document.getElementById("Resume-display") as HTMLDivElement

//Handle form submission
form.addEventListener("submit",(event:Event)=>{
    event.preventDefault(); // prevent page relaod
    //collection input value
    const name =(document.getElementById("name") as HTMLInputElement).value
    const email =(document.getElementById("email") as HTMLInputElement).value
    const phone =(document.getElementById("phone") as HTMLInputElement).value
    const education =(document.getElementById("education") as HTMLInputElement).value
    const experience =(document.getElementById("experience") as HTMLInputElement).value
    const skills =(document.getElementById("skills") as HTMLInputElement).value

    // Generate the Resume Content dynamically
    const resumeHTML = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
     <p><b>name:</b>${name}</p>
    <p><b>email:</b>${email}</p>
   <p><b>Phone:</b>${phone}</p>
      <p>education:</b>${education}</p>
   <p><b>experience:</b>${experience} </p>
    <p><b>skills:<b/>${skills} </p>
    `;
    // Display the Generate resume
    if (resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
     } else {
            console.error("The resume Display Element is Missing")
            
        }
    
    
    
    
});