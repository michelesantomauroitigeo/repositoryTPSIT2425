
class Studente{
    private String nome;
    private String cognome;
    private int eta;
    private int matricola;
    private String corso;
    private int [] voto;
    private int nVoti =0;
    public Final MAX=3;

    public Studente(){

    }

    public Studente(String nome, Sting cognome, int eta, int matricola, String corso){
        this.nome=nome;
        this.cognome=cognome;
        this.eta=eta;
        this.matricola=matricola;
        this.corso=corso;
        this.voti = new int[MAX];

    }

    public String getNome(){
        return this.nome;
    }

    public void setNome(String nome){
        this.nome=nome;
    }

    public String getCognome(){
        return this.cognome;
    }

    public void setCognome(String congnome){
        this.cognome=cognome;
    }

    public int getEta(){
        return this.eta;
    }

    public void setEta(int eta){
        this.eta=eta;
    }

    public int getMatricola(){
        return this.matricola;
    }
    public void setMatricola (int matricola){
        this.matricola=matricola;
    } 
    public String getCorso(){
        return this.corso;
    }

    public void setCorso(String corso){
        this.corso=corso;
    }

    public getVoto(){
        for(int i=0 ;i<MAX; i++){
            return "voto" +i+ ": " +voto[i];
        }
    }

    public void setVoto(int voto[]){
        for(int i=0 ;i<MAX; i++){
            this.voto=voto[i];
        }
    }

    public String toString(){
        return "Studente: "+this.nome + " " + this.cognome +" di eta': " + this.eta + " Nel corso: " + this.corso +" con matricola " + this.matricola;
    }
}