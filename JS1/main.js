const biciclette = [
  {
     'nome' : 'Atala',
     'peso' : 10,
  },
  {
     'nome' : 'Bianchi',
     'peso' : 2,
  },
  {
     'nome' : 'Bottecchia',
     'peso' : 7,
  },
  {
     'nome' : 'Carrera',
     'peso' : 3,
  },

];



const {nome, peso} = biciclette[0];
console.log(nome, peso);

let controllo = biciclette[0];
biciclette.forEach((item) => {
  if (item.peso< controllo.peso) {
    controllo = item

  }
});
console.log(controllo);
