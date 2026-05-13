//var generateName = require('sillyname');  -> assim se faz caso nao adicione o "type" no package.

import generateName from 'sillyname';
var nomeEsquisito = generateName();

console.log(`Meu nome esquisito é ${nomeEsquisito}`);


import meuNomeDeSuperHeroi from 'superheroes';
import { randomSuperhero } from 'superheroes';

console.log(`Meu nome de super Herói é: ${randomSuperhero()}!!!`);
