var persona= {
nome:"Mario",
cognome:"biondi",
nomeECognome:function(){return this.nome + " " + this.cognome;}
}
nome="prila"
debugger;
console.log(persona.nome)
try{

    console.log(persona.nomeECognome())
}
catch (e)
{
    console.log(e.message)

}
debugger;
//fuori da contesto esecuzione...
function saluta(NomePersona){
     console.log(NomePersona.call(persona))} //nome e cognome invocato fuori contesto
console.log("---")
saluta(persona.nomeECognome);

console.log("----")
function saluta2(){console.log(nome)}
try{
saluta2();
}
catch (e)
{
    console.log(e.message)

}
