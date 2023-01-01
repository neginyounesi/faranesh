

const usernameInut= document.querySelector(".user-input");
const passwordInput=document.querySelector(".pass-input");
const usernameMsg=document.querySelector(".username-msg");
const passwordMsg=document.querySelector(".password-msg");
const sigininMsg=document.querySelector(".signin-status");
const loginBtn=document.querySelector(".login-button")
loginBtn.addEventListener("click" , signIn);

function signIn(event){
    event.preventDefault();
    const usernameValue = usernameInut.value;
    const passwordValue = usernameInut.value;
    let ifSendDate =true;
    if(usernameValue.length===0 || usernameValue.indexOf("@")===-1){
        usernameMsg.innerText = "please enter a valid Email";
        ifSendDate=false;
    }
    if(passwordValue.length===0){
        passwordMsg.innerText = "please enter your password";
        ifSendDate=false;
    }else if(passwordValue.length<=4){
        passwordMsg.innerText = "your password is too short";
        ifSendDate=false;
    }
    if(ifSendDate){
        const body= JSON.stringify({
            username:usernameValue,
            password:passwordValue
        })
        const headers ={
            "Content-Type":"application/Json"
        }
        fetch('https://jsonplaceholder.typicode.com/posts' ,{
            method:"POST",
            body:body,
            headers:headers
        })
        .then(Response =>{
            if(Response.ok){
            sigininMsg.innerText="you signed in successfully"
            }
        })
    }

}



