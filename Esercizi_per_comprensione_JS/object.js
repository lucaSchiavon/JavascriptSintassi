var moduloest= require('mezzotrasporto');
var x = new String("Una nuova stringa");
var y = x.replace("s", "S");

var valore="aaaa"
var valoreIniziale="10"
var valoreFinale="20"
var messaggio = `Attenzione!\nIl valore inserito ${valore} non è valido perché esso deve essere compreso tra ${valoreIniziale} e ${valoreFinale}.\nSi prega di riprovare.`;
console.log(y);

function persona(nome, cognome) {
    this.nome = nome;
    this.cognome = cognome;
    this.indirizzo = "";
    this.email = "";
    this.mostraNomeCompleto = function () {};
    this.calcolaCodiceFiscale = function () {};
}
var marioRossi = new persona("Mario", "Rossi");

console.log(marioRossi.nome);

var jet=new moduloest.mezzotrasporto("Aeroplano");

console.log(jet.tipo);
jet.accelera();
 
function albero(nome,specie)
 {
     var _informazione; //l'unico modo per creare un membo privato in una classe è definirlo var nel costruttore (informazione non sarà visibile quando si istanzia la classe)
this.nome=(nome || "");
this.specie=(specie || "");

 }
var fag2=new albero();
//qui come si può vedere la proprietà nome può essere cancellata e la proprietà specie non può essere editata
 var faggio=Object.create(albero.prototype,{
 nome:{value:"faggio",
    writable:true,
    configurable:true},
 specie:{value:"angiosperme",
    writable:false},
_info:{value:"",
        writable:true,
        configurable:false},
info: {get: function() {return _informazione;},
set: function(value) { _informazione=value}
}
       
    });
 console.log(faggio.nome);
 faggio.nome="faggino";
 console.log(faggio.nome);
 faggio.specie="gimnosperme";
 faggio.eta=23;
 console.log(faggio.specie);
 Reflect.deleteProperty(faggio, 'nome');
 faggio.info="test";
 console.log(faggio.info);
 
 function olivo(nome,specie)
 {
albero.call(this,nome,specie);

 }
 var olivoistanza=new olivo();
/*
var faggio=Object.create(albero.prototype,
   {nome:{
       value:"faggio",writable=true,configurable=false},
    specie:{value:"angiosperme",writable=false,configurable=false}
}
);
console.log(faggio.nome);
*/
console.log("---");