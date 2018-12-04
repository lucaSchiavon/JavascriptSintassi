var veicoloFactory= require('factory');
//pattern creazionali: si occupa della creazione di classi e oggetti
//*********************** 
//singleton pattern
var singleton = {
	proprieta: "abc",
	metodo: function() {
		// ...
	}
};
//se questo singleton non viene usato risultiamo aver sprecato memoria
singleton.metodo(); 


var singleton = (function(){
	var instance;
	return {
		getInstance: function() {
			if (!instance) {
				instance = { proprieta: "abc", metodo: function() { } };
			}
			return instance;
		}
	};
})();

var mySingleton = singleton.getInstance();
console.log(mySingleton.proprieta);	 //"abc"
//***********************
//factory pattern
function Automobile(mezzo){
this.tipo=mezzo.tipo;
this.colore=mezzo.colore;
this.modello=mezzo.modello;
}

var veicoloFactory = {
	creaVeicolo: function(opzioni) {
		var veicolo;
		if (opzioni && opzioni.length) {
			switch (opzioni.tipo) {
				case "auto":
					veicolo = new Automobile(opzioni);
					return veicolo
					break;
				case "moto":
					veicolo = new Moto(opzioni);
					return veicolo
					break;
				case "camion":
					veicolo = new Camion(opzioni);
					return veicolo
					break;
			}
		}
	}
};
var myAutomobile = veicoloFactory.creaVeicolo({tipo: "auto", colore: "rosso", modello: "berlina"});
//var myAutobus = veicoloFactory.creaVeicolo({tipo: "bus", colore: "giallo"});

console.log(myAutomobile.veicolo.colore);
//pattern strutturali: fornire un modo per gestire le relazioni tra gli oggetti
//module pattern
var modulo = (function() {
	function metodoPrivato() {
		//...
	}
	return {
		metodoPubblico: function() {
			metodoPrivato();
		}
	}
})();
modulo.metodoPubblico();
//adapter pattern
//In determinate situazioni si può avere la necessità di sostituire un oggetto con un altro che offre le medesime funzionalità ma ha migliori prestazioni o comunque lo preferiamo all’originale.
//In questi casi è molto difficile che il nuovo oggetto offra gli stessi nomi per i metodi e le proprietà del vecchio. Per integrare il nuovo oggetto nella nostra applicazione dovremmo andare a 
//modificare tutte le chiamate al vecchio oggetto per renderle compatibili con il nuovo.
//In alternativa possiamo adottare l’Adapter Pattern che prevede la creazione di un nuovo oggetto che fa da tramite fra la vecchia e la nuova modalità di invocazione di metodi ed oggetti.

var vecchioObj = function() {
	this.metodo = function (x) {  };
};
var obj = new vecchioObj(); obj.metodo(123);

//siccome il nuovo oggetto ha questa struttura,: 
var nuovoObj = function() {
	this.nuovoMetodo = function(x) {  };
};
//per evitare di sostituire dappertutto il vecchio col nuovo creiamo un adapter
var vecchioObj = function() {
	var myObj = new nuovoObj();
	this.metodo = myObj.nuovoMetodo;
};
//abbiamo ridefinito l’oggetto dismesso utilizzando al suo interno il nuovo oggetto.


//facade pattern
//Il pattern Façade (fesad pronuncia) ha l’obiettivo di fornire un’interfaccia di alto livello per una funzionalità, nascondendo la complessità sottostante
//Supponiamo ad esempio che per effettuare una certa elaborazione bisogna coinvolgere diversi oggetti invocando determinati metodi e controllando i rispettivi esiti
var cilindro = function() {
	this.calcolaArea = function(raggio, altezza) {
		var areaBase = cerchio.calcolaArea(raggio);
		var circonferenzaBase = cerchio.calcolaCirconferenza(raggio);
		var areaLaterale = rettangolo.calcolaarea( circonferenzaBase, altezza);
		return (areaBase * 2) + areaLaterale;
	};
}

//MVC/MVVM pattern
var model = { nome: "Mario", cognome: "Rossi" };
var view = {
		txtNome: document.getElementById("txtNome");
		txtCognome: document.getElementById("txtCognome");
		btnSalva: document.getElementById("btnSalva");
};
var controller = {
	init: function() {
		view.txtNome.value = model.nome;
		view.txtCognome.value = model.cognome;
		view.btnSalva.onclick = controller.salva;
	},
	salva: function() {
		model.nome = view.txtNome.value;
		model.cognome = view.txtCognome.value;
		//invia il model al server
		invia(model);
	}
};

//pattern comportamentali: comunicazione tra gli oggetti di un’applicazione
//pattern observable
var centraleMessaggi = function() {
	this.listaObserver = [];
};
centraleMessaggi.prototype = {
	subscribe: function(callback) {
		this.listaObserver.push(callback); //callback è funzione da eseguire nel momento in cui arriva nuovo messaggio
	},
	unsubscribe: function(callback) {
		for (var i = 0; i < this.listaObserver.length; i++) {
			if (this.listaObserver[i] === callback) {
				this.listaObserver.splice(i, 1);
				return;
			}
		}
	},
	nuovoMessaggio: function(msg) {
		for (var i = 0; i < this.listaObserver.length; i++) {
			this.listaObserver[i](msg);
		}
	}
};


//sottoscrizione dell'observer all'observable
var cm = new centraleMessaggi();
cm.subscribe(function(msg) {
	//...
});

//altri pattern: promise pattern
//complesso...
getMessaggio(
	function(msg) {
		sendMessaggio( msg, "utente@dominio.com",
			function()    { console.log("Messaggio inoltrato"); },
			function(err) { console.log("Si è verificato un errore: " + err.message); } );
	},
	function(err) { console.log("Si è verificato un errore: " + err.message); }
);

//Secondo questo pattern, una promise è un oggetto che rappresenta il risultato pendente di un’operazione asincrona.
var promise = getMessaggio();
promise.done(sendMessaggio).done(function() {
	console.log("Messaggio inoltrato");
});
promise.fail(function(err) {
	console.log("Si è verificato un errore: " + err.message);
});

//DECORATOR:
//una porzione di codice viene arricchita con altro codice
//es: prende in input una funzione e restituisce una nuova funzione che esegue quella in input arricchendola con la scrittura di messaggi sulla console
function logDecorator(f) {
	return function() {
	   console.log("Inizio esecuzione");
	   var result = f.apply(this, arguments);
	   console.log("Fine esecuzione");
	   return result;
	};
 }

 function somma(x, y) {
	return x + y;
 }
 var sommaConLog = logDecorator(somma);
 console.log(sommaConLog(2, 3));
//Inizio esecuzione
//Fine esecuzione
//5

//Il principale vantaggio dell’applicazione di questo pattern consiste nel separare la logica di più attività componendo più funzioni.



