// Escreva seu código aqui.

/*Não mexa nessa parte do codigo, é um codigo padronizado para lhe auxiliar
Bastas descomentar o codigo para utilizar, para funcionar corretamente siga as nomenclaturar propostas no canvas*/

//Método ForEach
// const arrayTestForEach = [1, 2, 3, 4, 5];
// function callbackForEach(elem, index, arr) {
//   return (arr[index] = elem * 2);
// }

// newForEach(arrayTestForEach, callbackForEach);
// console.assert(typeof newForEach === "function","Sua Função newForEach ou não está declarada ou está com nome incorreto");
// console.assert(arrayTestForEach.toString() === "2,4,6,8,10","possivel erro no callback, verificar a declaração dos paramétros do método, esse método possui como parâmetros do callback: elemento Atual, indice e array nessa respectiva ordem, verificar documentação");

// Método Map
/*
const arrayTestMap = [1,2,3,4,5]
function callbackMap(elem, index, arr){
    return `Número ${elem} na posição: ${index}, veio desse array: ${arr}`
}

console.assert(typeof newMap === 'function', "Sua Função newMap ou não está declarada ou está com nome incorreto")
console.assert(Array.isArray(newMap(arrayTestMap, callbackMap)), "A função newMap deve retornar um array")
console.assert(newMap(arrayTestMap, callbackMap).toString() === arrayTestMap.map(callbackMap).toString(), "possivel erro no callback, verificar a declaração dos paramétros do método, esse método possui como parâmetros do callback: elemento Atual, indice e array nessa respectiva ordem, verificar documentação")
*/

// Método Filter
/*
const arrayTestFilter = [1,2,3,4,5]
function callbackFilter(elem, index, arr){
    if(elem > 2 && index && arr.length > 2){
        return true
    }
}
console.assert(typeof newFilter === 'function', "Sua Função newFilter ou não está declarada ou está com nome incorreto")
console.assert(Array.isArray(newFilter(arrayTestFilter, callbackFilter)), "A função newFilter deve retornar um array")
console.assert(newFilter(arrayTestFilter, callbackFilter).toString() === arrayTestFilter.filter(callbackFilter).toString(), "possivel erro no callback, verificar a declaração dos paramétros do método, esse método possui como parâmetros do callback: elemento Atual, indice e array nessa respectiva ordem, verificar documentação")
*/

//find
/*
const arrayTestFind = [1,2,3,4,5]
function callbackFind(elem, index, arr){
    if(elem > 2 && index && arr.length > 2){
        return true
    }
}
console.assert(typeof newFind === 'function', "Sua Função newFind ou não está declarada ou está com nome incorreto")
console.assert(newFind(arrayTestFind, callbackFind), "A função newFind deve retornar um elemento")
console.assert(newFind(arrayTestFind, callbackFind).toString() === arrayTestFind.find(callbackFind).toString(), "possivel erro no callback, verificar a declaração dos paramétros do método, esse método possui como parâmetros do callback: elemento Atual, indice e array nessa respectiva ordem, verificar documentação")
*/

//indexOf
/*
const arrayTestIndexOf = [1,2,3,4,5]
console.assert(typeof newIndexOf === 'function', "Sua Função newIndexOf ou não está declarada ou está com nome incorreto")
console.assert(newIndexOf(arrayTestIndexOf, 3), "A função newFind deve retornar um elemento")
console.assert(newIndexOf(arrayTestIndexOf, 3) === arrayTestIndexOf.indexOf(3), "Possível erro na função, verificar se todos os parâmetros foram passados, esse método tem como parâmetro elemento procurado e pontoInicial que é um valor pré definido, verificar documentação")
*/

//Includes
// const arrayTestIncludes = [1, 2, 3, 4, 5, 6];
// console.assert(typeof newIncludes == "function", "Sua função newIncludes ou não está declarada ou está com o nome incorreto")
// console.assert(newIncludes(arrayTestIncludes,3), "A função newIncludes deve retornar um elemento")
// console.assert(newIncludes(arrayTestIncludes, 3, 1) === true, "Possível erro na função, verificar se todos os parâmetros foram passados, esse método tem como parâmetro array, elemento procurado e pontoInicial que é um valor pré definido, verificar documentação");
// console.assert(newIncludes(arrayTestIncludes, 3, 5) === false, "Possível erro na função, quando não encontrado o valor deve ser retornado false, verificar documentação");

//Reduce
// const arrayTestReduce = [1, 2, 3, 4, 5];
// const callbackReduce = (acumulator, value, index, arr) => {
//   if (value == arr[index]) return (acumulator += arr[index]);
// }
// console.assert(typeof newReduce == "function", "Sua função newReduce ou não está declarada ou está com nome incorreto");
// console.assert(newReduce(arrayTestReduce, callbackReduce, 20), "A sua função newReduce deve retornar um elemento");
// console.assert(newReduce(arrayTestReduce, callbackReduce, 20 === 35), "Possível erro na função, verificar se todos os parâmetros foram passados, esse método tem como parâmetro da callback acumulador, valor, index e array, verificar documentação");

// EXTRAS

//findIndex
// const newFindIndexTest = [1, 2, 3, 4, 5];
// function callbackFindIndex1(value, index, arr) {
//   if (value > 10) return arr[index];
//   return undefined;
// }
// const callbackFindIndex2 = (value, index, arr) => {
//   if (value === 5) return arr[index];
//   return undefined;
// }

// console.assert(typeof newFindIndex == "function", "Sua função newFindIndex, ou não está declarada ou está com nome incorreto")
// console.assert(newFindIndex(newFindIndexTest, callbackFindIndex1), "A sua função newFindIndex deve retornar um elemento")
// console.assert(newFindIndex(newFindIndexTest, callbackFindIndex2) == 4, "Possível erro na função, verificar se todos os parâmetros foram passados, esse método tem como parâmetro da callback valor, index, array, verificar documentação");
// console.assert(newFindIndex(newFindIndexTest, callbackFindIndex1) == -1, "Possível erro na função, quando não encontrado o valor pedido na callback deve ter retorno -1, verificar documentação");

//some
// const newSomeTest = [1, 2, 3, 4, 5];
// const callbackNewSome1 = (currentValue, index, arr) => {
//   if (currentValue > 5) return arr[index];
// }
// const callbackNewSome2 = (currentValue, index, arr) => {
//   if (currentValue === 5) return arr[index]
// }
// console.assert(typeof newSome == "function", "Sua função newSome, ou não está declarada ou está com o nome incorreto");
// console.assert(newSome(newSomeTest, callbackNewSome2), "A sua função newSome deve retornar um elemento");
// console.assert(newSome(newSomeTest, callbackNewSome2) === true, "Possível erro na função, verificar se todos os parâmetros foram passados, esse método tem como parâmetro da callback valor atual, index, array, verificar documentação");
// console.assert(newSome(newSomeTest, callbackNewSome1) === false, "Possível erro na função, quando não é encontrado o valor na função deve retornar false, verificar documentação");

//every
// const newEveryTest = [1, 2, 3, 4, 5];
// const callbackNewEvery1 = (currentValue, index, arr) => {
//   if (currentValue > 0) return arr[index];
// }
// const callbackNewEvery2 = (currentValue, index, arr) => {
//   if (currentValue > 1) return arr[index];
// }
// console.assert(typeof newEvery == "function", "Sua função newEvery, ou não está declarada ou está com o nome incorreto");
// console.assert(newEvery(newEveryTest, callbackNewEvery1), "A sua função newEvery deve retornar um elemento");
// console.assert(newEvery(newEveryTest, callbackNewEvery1) == true, "Possível erro na função, verificar se todos os parâmetros foram passados, esse método tem como parâmetro da callback valor atual, index, array, verificar documentação");
// console.assert(newEvery(newEveryTest, callbackNewEvery2) == false, "Possível erro na função, quando algum dos valores é diferente da verificação da callback deve se retornar false , verificar documentação");

//concat
// const newConcatTest = [1, 2, 3, 4, 5];
// console.assert(typeof newConcat == "function", "Sua função newConcat ou não está declarada ou está com o nome incorreto")
// console.assert(newConcat(newConcatTest,1), "A sua função newConcat deve retornar um elemento");
// console.assert(newConcat(newConcatTest, 6, 7), "Possível erro na função, verificar se todos os parâmetros foram passados, esse método tem como parâmetro array e valor1, valor2 e ..., valorN sendo o valor podendo ser arrays, verificar documentação");
// console.assert(newConcat(newConcatTest, [6, 7]).toString() == [1, 2, 3, 4, 5, 6, 7].toString(),`Possível erro na função, era esperado retornar [1, 2, 3, 4, 5, 6, 7] e retornou ${newConcat(newConcatTest,6,7)}, verificar documentação`);

//join
// const newJoinTest = [1, 2, 3, 4, 5];
// console.assert(typeof newJoin == "function", "Sua função newJoin ou não está declarada ou está com o nome incorreto")
// console.assert(newJoin(newJoinTest,","), "A sua função newJoin deve retornar um elemento")
// console.assert(newJoin(newJoinTest, ";") == "1;2;3;4;5", "Possível erro na função, verificar se todos os parâmetros foram passados, esse método tem como parâmetro array e separador , verificar documentação");
// console.assert(newJoin([], ",") == "", "Possível erro na função, quando passada uma array vazia deve retornar '', verificar a documentação");

//slice
// const newSliceTest = [1, 2, 3, 4, 5];
// console.assert(typeof newSlice == "function", "Sua função newSlice ou não está declarada ou está com o nome incorreto")
// console.assert(newSlice(newSliceTest).toString() == "1,2,3,4,5", "A sua função newSlice deve retornar um elemento")
// console.assert(newSlice(newSliceTest, 1).toString() == "2,3,4,5", "Possível erro na função,verificar se todos os parâmetros foram passados, esse método tem como parâmetro array, index inicial, index final , verificar documentação");
// console.assert(newSlice(newSliceTest, -2).toString() == "4,5", "Possível erro na função, quando passado um indice inicial negativo deve retornar os dois ultimos valores da array, verificar documentação");

//flat

// const newFlatTest = [1, 2, [3, 4], [5, [6, 7]]];
// console.assert(newFlat(newFlatTest), "Sua função newFlat ou não está delcarada ou está com o nome incorreto")
// console.assert(newFlat(newFlatTest), "A sua função newFlat deve retornar um elemento")
// console.assert(newFlat(newFlatTest,2).toString() === "1,2,3,4,5,6,7","Possível erro na função, verificar se todos os parâmetros foram passados esse método tem como parâmetro array e profundidade, verificar documentação")
// console.assert(newFlat(newFlatTest, 1)[5].toString() === "6,7", `Possível erro na função, era esperado receber [1,2,3,4,5,[6,7]]  e recebeu [${newFlat(newFlatTest,1)}]`);

//flatMap
// const callbackNewFlatMap1 = (value, index, array) => {
//   if (value == array[index]) return [value * 10];
// }
// const callbackNewFlatMap2= (value, index, array) => {
//   if (value == array[index]) return [[value * 10, value * 2]];
// }
// const newFlatMapTest = [1, 2, 3, 4, 5];
// console.assert(typeof newFlatMap == "function", "Sua função newFlatMap ou não está declarada ou está com nome incorreto")
// console.assert(newFlatMap(newFlatMapTest, callbackNewFlatMap1), "A sua função newFlatMap deve retornar um elemento");
// console.assert(newFlatMap(newFlatMapTest, callbackNewFlatMap1).toString() === "10,20,30,40,50", "Possível erro na função, verificar se todos os parâmetros foram passados esse método tem como parâmetro da callback value, index e array, verificar documentação")
// console.assert(newFlatMap(newFlatMapTest, callbackNewFlatMap2)[2].toString() == "30,6", `Possível erro na função, era esperado receber [[10,2],[20,4],[30,6],[40,8],[50,10]] e recebeu ${newFlatMap(newFlatMapTest,callbackNewFlatMap2)}, verificar a documentação`);
