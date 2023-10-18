var num= null;

while(num<1|num>100){
    num= parseInt( prompt("Introduce numero del 1 al 100"));
}
if(num%2==0)
    alert("El numero es divisible entre 2");
if(num%3==0)
    alert("El numero es divisible entre 3");
if(num%5==0)
    alert("El numero es divisible entre 5");
if(num%10==0)
    alert("El numero es divisible entre 10");