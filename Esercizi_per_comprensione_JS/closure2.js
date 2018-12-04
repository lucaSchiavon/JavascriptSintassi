

function saluta(persone)
{
//var saluti=new array();
var nomeCognome;
var saluti=[];
for (var i in persone)
{
nomeCognome=persone[i].nome + " " + persone[i].cognome;
saluti.push(function(nc){return function(){
console.log(nc);
}}(nomeCognome));

}
return saluti;
}




var visualizzaSaluti = saluta([{ nome: "Mario", cognome: "Rossi" },
        { nome: "Marco", cognome: "Neri" }]);
        for (var i in visualizzaSaluti) {
            console.log(visualizzaSaluti[i]());
        }
        console.log("+++");
        var saluti2=[{ nome: "Mario", cognome: "Rossi" },
        { nome: "Marco", cognome: "Neri" }];
        for (var x in visualizzaSaluti) {
            console.log(saluti2[x].nome + " " + saluti2[x].cognome);
        }

