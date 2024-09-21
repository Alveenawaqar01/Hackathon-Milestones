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
    <h2><b> Editable Resume</b></h2>
    <h3>Personal Information</h3>
     <p><b>name:</b><span contenteditable="true">${name}</span></p>
    <p><b>email:</b><span contenteditable="true">${email}</span</p>
   <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>
 <h3>Education</h3>  
      <p contenteditable="true">${education}</p>
      <h3>Expirence</h3>
   <p contenteditable="true">${experience} </p>
   <h3>Skills</h3>
    <p contenteditable="true">${skills} </p>
    `;
    // Display the Generate resume
    if (resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
     } else {
            console.error("The resume Display Element is Missing")
            
        }
    
    
    
    
});