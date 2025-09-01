// console.log("Hello, Node.js!");

const fs = require('fs');
// let i = 0;
// while (i < 5) {
// fs.writeFile('novoDocumento.txt' + i, 'Conseguimos criar um novo arquivo com Node.js!', (err) => {
//     if (err) throw err;
//     console.log('Arquivo criado com sucesso!');
// });
// i++;
// }

fs.readFile('../Anotações.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});