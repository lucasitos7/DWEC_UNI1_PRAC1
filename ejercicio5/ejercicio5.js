const usuarios=["lucas1","lucas2","lucas3","lucas4","lucas5"];
const contra=["lu123","luc12","luca1","lucas","lu1234"];

var usu=prompt("Introduce nombre de usuario");
var pass=prompt("Introduce contraseña");

for(var i=0; i<usuarios.length;i++){
    if(usu==usuarios[i]){
        if(pass==contra[i]){
            alert("Acceso concedido");
            break;
        }
        else{
            alert("El usuario no coincide con la contraseña");
            break;
        }
    }
    if(i==usuarios.length-1){
        alert("El usuario no existe");
        
    }
}