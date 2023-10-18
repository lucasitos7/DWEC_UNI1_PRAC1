var resultado=null;
var num1= parseInt( prompt("Introduce numero entero (1)"));
resultado=num1;
var num2= null;
var ope=null;

while(ope!="="){
    ope= prompt("Operacion a realizar (+,-,*,/,=");
    if(ope=="=")
        alert("El resultado es: "+resultado);
    else{
        num2= parseInt( prompt("Introduce numero entero (2)"));
        switch(ope){
            case "+":{
                resultado+=num2;
                alert("La Suma es: "+resultado);
                break;
            }
            case "-":{
                resultado-=num2;
                alert("La resta es: "+resultado);
                break;
            }
            case "*":{
                resultado*=num2;
                alert("La Multiplicacion es: "+resultado);
                break;
            }
            case "/":{
                resultado/=num2;
                alert("La Division es: "+resultado);
                break;
            }
            case "=":{
                alert("El resultado es: "+resultado);
                break;
            }
        }
    }
}