const username = "priyanka";
const password = "pulu2023";

const inp  = document.querySelectorAll("input");
const btn = document.querySelector("a");
const m = document.getElementById("message");
const link1 = document.getElementById("link1");
const div1 = document.querySelector("div");

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    login();
})

function login(){
    const uname = inp[0].value;
    const pw = inp[1].value;
    const correct = `**User name and password Correct please wait...`;
    const incorrect = `**User name or password InCorrect try again!`;
    
  
    if(uname === username && pw===password){
        m.innerHTML=correct;
        m.style.color="green";
        link1.style.backgroundColor = "blue";
        document.body.style.backgroundColor ="green";
        div1.style.backgroundColor ="#fff";
        setTimeout(()=>{
            console.log("yes");
            window.location.href = "./gallery.html";
        },5000);
    }
    else{
        m.innerHTML=incorrect;
        m.style.color="red";
        link1.style.backgroundColor = "red";
        document.body.style.backgroundColor ="red";
        div1.style.backgroundColor ="#fff";
        setTimeout(()=>{
            console.log("No");
            window.location.href = "./pnf.html";
        },5000);
    }
}

