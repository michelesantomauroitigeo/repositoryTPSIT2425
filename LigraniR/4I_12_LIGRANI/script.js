document.querySelectorAll("#modifica").forEach(button => {
    button.addEventListener("click", function() {
        document.getElementById("overlay").style.display = "flex";
        document.querySelector("table").style.opacity = "0.5";
    });
});


document.querySelectorAll("#elimina").forEach(button => {
    button.addEventListener("click", function() {
        document.getElementById("overlay2").style.display = "flex";
        document.querySelector("table").style.opacity = "0.5";
    });
});


function no() {
    document.getElementById("overlay2").style.display = "none";
    document.querySelector("table").style.opacity = "1";
}
