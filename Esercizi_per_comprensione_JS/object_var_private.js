
function albero(nome,specie)
 {
     var _informazione; //l'unico modo per creare un membo privato in una classe è definirlo var nel costruttore (informazione non sarà visibile quando si istanzia la classe)
this.nome=(nome || "");
this.specie=(specie || "");
this.getinformazione = function (){return _informazione};
this.setinformazione = function (value){_informazione=value};
 }

 var faggio=new albero();
 faggio.setinformazione("test");
 console.log(faggio.getinformazione());
console.log("---");