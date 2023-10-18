var num1=null;
var num2=null;
var num3=null;
var num4=null;
while(num1%1!=0 | num1<=0 ){
    num1= parseInt( prompt("introduce un numero entero positivo (1)"));
    if(num1%1==0 & num1>=0)
        alert("El numero es entero positivo");
     else
        alert("El numero NO es entero");
}
while(num2%1!=0 | num2<=0 ){
    num2= parseInt( prompt("introduce un numero entero positivo (2)"));
    if(num2%1==0 & num2>=0)
        alert("El numero es entero positivo");
     else
        alert("El numero NO es entero");
}
while(num3%1!=0 | num3<=0 ){
    num3= parseInt( prompt("introduce un numero entero positivo (3)"));
    if(num3%1==0 & num3>=0)
        alert("El numero es entero positivo");
     else
        alert("El numero NO es entero");
}
while(num4%1!=0 | num4<=0 ){
    num4= parseInt( prompt("introduce un numero entero positivo (4)"));
    if(num4%1==0 & num4>=0)
        alert("El numero es entero positivo");
     else
        alert("El numero NO es entero");
}

if(num1<num2<num3<num4)
    alert("Los numeros estan en orden creciente")
else
    alert("Los numeros NOOO estan en orden creciente")