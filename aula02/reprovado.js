const alunos = ["ana", "marcos","pedro"];
const medias = [7,4.5,8,7.5];

const reprpvados = alunos.filter((_,indice) =>{
     return medias [indice] < 6;
});

console.log(reprovados);
