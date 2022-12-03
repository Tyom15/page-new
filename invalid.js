
let emailInput = document.querySelector("#email");


emailInput.addEventListener("keyup",function(){
    let emailMessage = document.querySelector("#email-message");
    if (emailInput.value.includes("@"))
    {
        emailMessage.innerHTML="  ";
    
    }else {
        emailMessage.innerHTML = "invalid</small>";
        emailMessage.style.color = "red"
    }
});
