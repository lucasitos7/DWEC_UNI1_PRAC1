var suma=0;
var conta=0;
var num= 0;

while(num % 1!=0 | num<=0){
    num= parseInt( prompt("introduce un numero entero positivo"));
    if(num%1==0 & num>=0){
        alert("El numero es entero positivo");
        while (conta != num){
            suma=(suma+num);
            conta++;
        }
        alert("El sumatorio es "+suma);
    }
    else
        alert("El numero NO es entero");
}
