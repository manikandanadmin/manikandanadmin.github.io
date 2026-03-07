let user = localStorage.getItem("vmk_user")

if(!user){

window.location.href="login.html"

}

document.getElementById("userEmail").innerText=user


function logout(){

localStorage.removeItem("vmk_user")

window.location.href="login.html"

}