class Student{
    constructor(name,fathername,mothername,dateofbirth,mobileno,email,courses,university,mentor,gender){
        this.name = name ;
        this.fathername = fathername ;
        this.mothername = mothername ;
        this.dateofbirth = dateofbirth ;
        this.mobileno = mobileno ;
        this.email = email ;
        this.courses = courses ;
        this.university = university ;
        this.mentor = mentor ;
        this.gender = gender ;
    }

}
 
function getData(){
    // get data in array from input and selected //
    let array=document.getElementsByTagName("input");
    let select =document.getElementsByTagName("select");

    let name=array[0].value;
    let fathersname=array[1].value;
    let mothername=array[2].value;
    let dateofbirth=array[3].value;
    let mobileno=array[4].value;
    let email=array[5].value;
    let courses=select[0].value;
    let university=select[1].value;
    let mentor=select[2].value;
    let gender=select[3].value;

    let student= new Student(name,fathersname,mothername,dateofbirth,mobileno,email,courses,university,mentor,gender)
    return student;
}

function signUp() {
    let student=getData();

    const apiUrl = "http://localhost:8080/erp/admission"; // Replace with your API endpoint

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Set the content type to JSON
        },
        body: JSON.stringify(student) // Convert data to JSON and send it in the request body
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            // document.getElementById("loginsuccess").style.display = "block";
            console.log("pass");
            // setTimeout(function () {
            //     document.getElementById("loginsuccess").style.display = "none";
            // }, 1000);
        })
        .catch((error) => {
            // document.getElementById("loginfailed").style.display = "block";
            // document.getElementById("loginfailed").style.transitionDelay = "0.2s";
            console.error("There was a problem with the fetch operation:", error);
            // setTimeout(function () {
            //     document.getElementById("loginfailed").style.display = "none";
            // }, 1000);
        });
}

