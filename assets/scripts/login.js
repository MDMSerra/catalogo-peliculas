// asignandole comportamiento al login
const home = document.querySelector(".home-login"),
    signupBtn = document.querySelector("#signup"),
    loginBtn = document.querySelector("#login"),
    pwShowHide = document.querySelectorAll(".pw_hide");

    // cambiando el estado de contraseña a texto y el icono tambien
    pwShowHide.forEach((icon) => {
        icon.addEventListener("click", () =>{
            let getPWInput = icon.parentElement.querySelector("input");

            if(getPWInput.type === "password"){
                getPWInput.type = "text";
                icon.classList.replace("uil-eye-slash", "uil-eye");
            }else{
                getPWInput.type = "password";
                icon.classList.replace("uil-eye", "uil-eye-slash");
            }
        });
    });
