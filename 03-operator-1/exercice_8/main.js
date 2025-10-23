const salaireMensuel = 500;
const loyer = salaireMensuel * 0.3;
const nourriture = salaireMensuel * 0.2;
const transport = salaireMensuel * 0.1;

let autresDepenses = 50;
autresDepenses += 25;

let totalDepenses = loyer + nourriture + transport + autresDepenses;
let reste = salaireMensuel - totalDepenses;

if (reste >= 100) {
    console.log ('Budget bien géré')
} else {
    console.log('Attention, budget serré')
};



module.exports = {
    salaireMensuel,
    loyer,
    nourriture,
    transport,
    autresDepenses,
    totalDepenses,
    reste
};