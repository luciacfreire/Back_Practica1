// Implementar el algoritmo quicksort en Typescript

const numeros = [23,14,31,22,48,5,66,11];


function quicksort (arr : number[]):number[] {

  if(arr.length <=1){
      return arr;
  }
    const pivote : number = arr[0];

    const izq : number[] = arr.filter((elem) => elem<pivote);
    const der : number[] = arr.filter((elem) => elem>pivote);

    return [...quicksort(izq),pivote,...quicksort(der)];
     
}

console.log(quicksort(numeros));