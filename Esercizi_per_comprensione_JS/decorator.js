class MyMath {
    @log
    somma(x, y) {
       return x + y;
    }
 }

 function log(target) {
    console.log("Inizio esecuzione");
    var result = target.apply(this, arguments);
    console.log("Fine esecuzione");
    return result;
 }

var math = new MyMath();
math.somma(2, 3);
//Inizio esecuzione
//Fine esecuzione
//5