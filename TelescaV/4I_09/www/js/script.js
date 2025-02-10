
document.querySelectorAll(".btn-action.complete").forEach((btn) => {
    btn.addEventListener("click", function () {
        this.classList.toggle("spunta");
    });
});
