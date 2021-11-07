alert("Adivina mi número del 1 al 6" + "\n" + "Tienes 5 oportunidades");



const dado = Math.trunc(Math.random() *5+1);
console.log(dado);

for(let i=1; i<=5; i++){
    let adivinar = parseInt(prompt("Ingrese un numero"));

    if(adivinar===dado){
        alert("Adivinaste!");
        break;

    }else{
        alert("Vuelve a intentarlo")
        adivinar
    }
 }

