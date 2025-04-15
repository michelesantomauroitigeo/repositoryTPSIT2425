document.querySelectorAll(".abilita input[type='checkbox']").forEach(checkbox => {
    checkbox.addEventListener("change", function() {
        const riga = this.closest("tr");

        if (!this.checked) {
            riga.style.backgroundColor = "red";
        } else {
            riga.style.backgroundColor = "";
        }
    });
});