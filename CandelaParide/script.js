let PASSWORD = "Password123"
let NOME = Gigio1;

function popup(){
    querySelectorAll("#popup").forEach(button => {
        button.addEventListener("click", function(){
            document.getElementById("overlay").style.display="flex";
        });
        
    });




function valida(){
    let nomeIns = document.getElementById("NomeCon");
    let passIns = document.getElementById("PassCon");

    if(nomeIns === NOME)
        document.getElementById(".SpanCon")
}
}