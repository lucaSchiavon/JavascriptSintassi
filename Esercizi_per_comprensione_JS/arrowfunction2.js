
var numeri = {
    x: 12,
    y: 3,
    calcola: function (operazione) {
        var fn;
      
        switch (operazione) {
            case '+':
                fn = function () { return this.x + this.y };
                break;
            case '-':
                fn = function () { return this.x - this.y };
                break;
            default:
                fn = function () { };
        }
        return fn();
    }
}

var res1=numeri.calcola('+');
//soluzione1: passare come arg this.x e y
var numeri2 = {
	x: 12,
	y: 3,
	calcola: function(operazione) {
		var res;
		switch (operazione) {
			case '+':
            res = function(a,b) { return a + b}(this.x,this.y);
                
			break;
			case '-':
            res = function(a,b) { return a - b}(this.x,this.y);
			break;
			default:
            res = function() {};
        }
       
		return res;
	}
}
var res2=numeri2.calcola('+');
var res3=numeri2.calcola('-');
//soluzione 2 esporre this con variabile num
var numeri3 = {
    x: 12,
    y: 3,
    calcola: function (operazione) {
        var num=this;
        var fn;
      
        switch (operazione) {
            case '+':
                fn = function () { return num.x + num.y };
                break;
            case '-':
                fn = function () { return num.x - num.y };
                break;
            default:
                fn = function () { };
        }
        return fn();
    }
}

var res4=numeri3.calcola('+');

//soluzione 3  con metodo call
var numeri4 = {
    x: 12,
    y: 3,
    calcola: function (operazione) {
       
        var fn;
      
        switch (operazione) {
            case '+':
                fn = function () { return this.x + this.y };
                break;
            case '-':
                fn = function () { return this.x - this.y };
                break;
            default:
                fn = function () { };
        }
        return fn.call(this);
    }
}
var res5=numeri4.calcola('+');

//soluzione 3  con metodo call
/*var numeri5 = {
    x: 12,
    y: 3,
    calcola: function (operazione) {
       
        var fn;
      
        switch (operazione) {
            case '+':
                fn = function () { return this.x + this.y };
                break;
            case '-':
                fn = function () { return this.x - this.y };
                break;
            default:
                fn = function () { };
        }
        return fn();
    }
}*/
//var res6=numeri5.calcola(numeri5.calcola.fn.bind(numeri5),'+');
console.log("aaa");