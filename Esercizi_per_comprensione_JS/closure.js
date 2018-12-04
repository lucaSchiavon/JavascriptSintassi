var visualizzasaluto;
var visualizzasalutoEsterna;

var IncipitRiga="--- ";
function salutaEsterna(persona){
    //var p=persona;
var salutoincipit=IncipitRiga + "Ciao";
    return function saluta()
    {
        var nomeECognome=salutoincipit + persona.nome + " " + persona.cognome;
        return function(){
        console.log(nomeECognome)};
    }
}


visualizzasalutoEsterna=salutaEsterna({nome:"Carlo",cognome:"Cattaneo"});
//saluta esterna qui è stata eseguita (linea precedente) ma salutoincipit è ancora accessibile...e non out of scope in quanto distrutta
visualizzasaluto=visualizzasalutoEsterna();
//saluta è stata eseguita (linea precedente) ma nomecognome è ancora accessibile...e non out of scope in quanto distrutta
debugger;
try{
//questo per dimostrare la catena scopechain infatti qui ancora accessibile nomecognome. salutoincipit ed incipitriga
    visualizzasaluto();
}
catch (e)
{

console.log(e.message)
}
