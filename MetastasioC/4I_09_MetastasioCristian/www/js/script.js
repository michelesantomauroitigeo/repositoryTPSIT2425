function Controllo(){
	var x =document.forms["form"]["inputField"].value;/*Prende il valore del campo di input all'interno del form con il nome "myForm".*/
	if(x==null || x==""){
		document.getElementById('demo').style.display='block';
		return false;
	}
}