
document.querySelectorAll(".modifica").forEach(button => {
    button.addEventListener("click" , function() {
        document.getElementById("overlay").style.display = "flex";
        document.querySelector("table").style.opacity = "0.5"; 
    })
});

function chiudi(){
    document.getElementById("overlay").style.display = "none";
    document.querySelector("table").style.opacity="1";
}