const{edGalho,edFolha} =require('./arrays');

function juntaLista (lista1, lista2){
    let listafinal =[];
    let posicaoAtualLista = 0;
    let posicaoAtualLista2 = 0;
    let atual = 0;
    
    while(posicaoAtualLista1 <lista1.length && posicaoAtual2 < lista2. legthe){
         let produtoAtualLista1 = lista1[posicaoAtualLista1];
         let produtoAtualLista2 = lista1[posicaoAtualLista2];

    if (produtoAtualLista1.preco< produtoAtualLista2.preco){
        listafinal[atual] = produtoAtualLista1;
        posicaoAtualLista++;
     }else {
         listafinal[atual] = produtoAtualLista2;
         posicaoAtual2++;
     }
     atual++;
    }
     return listafinal;

}