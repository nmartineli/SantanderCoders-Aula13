//For each:

let array = [5, 10, 15, 20, 25];
array.forEach((current) => {
  console.log(current * 2);
});

// Find:

const frutas = [
  { id: 1, name: 'Maçã' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Kiwi' },
];

let fruta = frutas.find((fruta) => fruta.id === 2);
console.log(fruta);

function findFN(array, predicate) {
  for (const element of array) {
    if (predicate(element)) {
      return element;
    }
  }
}

//Filter:

const produtos = [
  { id: 1, name: 'Teclado', price: 99.5 },
  { id: 2, name: 'Mouse', price: 65 },
  { id: 3, name: 'Monitor', price: 200 },
];

let produtosFilter = produtos.filter((element) => element.name.startsWith('M'));
console.log(produtosFilter);

function filterFN(array, predicate) {
  const arrayFiltro = [];
  for (const element of array) {
    if (predicate(element)) {
      arrayFiltro.push(element);
    }
  }
  return arrayFiltro;
}

//Map:

const precos = produtos.map((produto) => produto.price);
console.log(precos);

const produtosDesconto = produtos.map((produto) => ({
  id: produto.id,
  salePrice: produto.price * 0.9,
}));
console.log(produtosDesconto);

const people = [
  { name: 'Murillo', lastname: 'de Morais' },
  { name: 'Rafael', lastname: 'Oliveira' },
  { name: 'Nickolas', lastname: 'Silva' },
];

const saida = people.map((person) => `${person.name} ${person.lastname}`);

console.log(saida);

function mapFn(array, callback) {
  const mappedList = [];
  for (const value of array) {
    mappedList.push(callback(value));
  }
  return mappedList;
}

// Reduce: serve para reduzir os elementos da array a um único array

array.reduce((acc, current) => {
  console.log('acc', acc);
  console.log('current', current);
  return acc + current;
}, 0);

console.log(
  array.reduce(
    (acc, current) => {
      return { soma: acc.soma + current };
    },
    { soma: 0 }
  )
);

function reduceGN(array, callback, initialValue) {
  let acumulador;

  let i = 0;

  if (typeof initialValue !== 'undefined') {
    acumulador = initialValue;
  } else {
    acumulador = array[0];
    i = 1;
  }
  for (; i < array.length; i++) {
    acumulador = callback(acumulador, array[i]);
  }
  return acumulador;
}

let numerosTarefa = [1, 2, 3, 4, 5];

let tarefa = numerosTarefa.reduce(
  (acc, current, index, array) => {
    return {
      pares:
        current % 2 === 0 ? (acc.pares = [...acc.pares, current]) : acc.pares,
      media: acc.media + current / array.length,
      quantidadeDeElementos: array.length,
    };
  },
  {
    pares: [],
    media: 0,
    quantidadeDeElementos: 0,
  }
);

console.log(tarefa);
