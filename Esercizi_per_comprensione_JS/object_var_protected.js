function persona(nome, protectedInfo) {
	var privNome = nome;
	var protectedInfo =  protectedInfo || {};
	protectedInfo.codiceInterno = "12345ABC";
	this.nome = privNome;

}
function programmatore(nome) {
	var protectedInfo = {}; // creiamo una oggetto privato per avere un riferimento
    // facciamo in modo che il valore sia impostato dalla classe padre
    //qui protectedInfo si valorizza per riferimento
	persona.call(this, nome, protectedInfo);
	this.codice = protectedInfo.codiceInterno;
	this.linguaggiConosciuti = [];
}

var mario=new persona("mario");
var solazzi=new programmatore("solazzi");


function persona2(nome, cognome) {
	var privNome = nome;
	var privCognome = cognome;
	this.nome = privNome;
    this.cognome = privCognome;
    this.mostraNomeCompleto= function() {return this.nome + this.cognome};
}
persona2.prototype.mostraNomeCompleto2 = function() {return persona2.super.nome + persona2.super.cognome};
//persona2.prototype.mostraNomeCompleto = function() {return persona2.nome + persona2.cognome};
var gianni=new persona2("gianni","portese");


console.log(gianni.mostraNomeCompleto());
console.log(gianni.mostraNomeCompleto2());
console.log("---");