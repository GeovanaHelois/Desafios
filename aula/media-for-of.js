const notas =[10, 6.5, 8, 7.6];

let somaDasNotas = 0;

notas. forEach(function(nota){
    somaDasNotas += nota;
});

const media = somaDasNotas / notas.length; 

console.log(` a media das notas é ${media}`);