
// asignandole comportamiento al login
const formOpenBtn = document.querySelectorAll(".form-open"),
    home = document.querySelector(".home");
    formContainer = document.querySelector(".form_container"),
    formCloseBtn = document.querySelector(".form_close"),
    signupBtn = document.querySelector("#signup"),
    loginBtn = document.querySelector("#login"),
    pwShowHide = document.querySelectorAll(".pw_hide");


    formOpenBtn.addEventListener("click", () => home.classList.add("show"));
    formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

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

    signupBtn.addEventListener("click", (e) =>{
        e.preventDefault();
        formContainer.classList.add("active");
    });

    loginBtn.addEventListener("click", (e) =>{
        e.preventDefault();
        formContainer.classList.remove("active");
    });

// funciones para duncionalidad boton cargar mas de la seccion peliculas
let loadMoreBtn1 = document.querySelector('#load-more-1');
let currentItem1 = 4;

loadMoreBtn1.onclick = () => {
    let boxes = [...document.querySelectorAll(
        '.box-container-1 .box-1'
    )];
    for(var i= currentItem1; i < currentItem1 +4 ; i++){
        boxes[i].style.display = 'inline-block';
    }
    currentItem1 += 4;
    console
    if(currentItem1 >= boxes.length){
        loadMoreBtn1.style.display = 'none';
    }
}

let loadMoreBtn2 = document.querySelector('#load-more-2');
let currentItem2 = 4;

loadMoreBtn2.onclick = () => {
    let boxes = [...document.querySelectorAll(
        '.box-container-2 .box-2'
    )];
    for(var i= currentItem2; i < currentItem2 +4 ; i++){
        boxes[i].style.display = 'inline-block';
    }
    currentItem2 += 4;
    console
    if(currentItem2 >= boxes.length){
        loadMoreBtn2.style.display = 'none';
    }
}

let loadMoreBtn3 = document.querySelector('#load-more-3');
let currentItem3 = 4;

loadMoreBtn3.onclick = () => {
    let boxes = [...document.querySelectorAll(
        '.box-container-3 .box-3'
    )];
    for(var i= currentItem3; i < currentItem3 +4 ; i++){
        boxes[i].style.display = 'inline-block';
    }
    currentItem3 += 4;
    console
    if(currentItem3 >= boxes.length){
        loadMoreBtn3.style.display = 'none';
    }
}