        document.getElementById("logo").addEventListener("click", function () {
            this.src = "img/nuovo.jpg";
        });

        document.querySelectorAll(".menu").forEach(function (link) {
            link.addEventListener("click", function () {
                document.querySelectorAll(".menu").forEach(function (l) {
                    l.classList.remove("highlight");
                });
                this.classList.add("highlight");
            });
        });

        document.getElementById("login").addEventListener("click", function () {
            this.textContent = "Login effettuato";
            this.classList.add("enlarged");
        });

        document.getElementById("registration").addEventListener("click", function () {
            this.textContent = "Registrazione effettuata";
            this.classList.add("enlarged");
        });
  