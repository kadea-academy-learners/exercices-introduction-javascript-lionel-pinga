const maisonFamiliale = 60000000;
const terrains = 40000000;
const liquidites = 20000000;

const heritage = maisonFamiliale + terrains + liquidites;
console.log('Héritage total est de ', heritage, 'CDF');

const partEnfant = (heritage * 0.75) / 3;

const paul = partEnfant;
const marie = partEnfant;
const alain = partEnfant;

const eric = alain/2;
const clair = alain/2;

const madameMukuna = (heritage * 0.25) / 3;
const joseph = (heritage * 0.25) / 3;
const sarah = (heritage * 0.25) / 3;

console.log('Paul :.', paul, 'ÇDF');
console.log('Marie :.', marie, 'ÇDF');
console.log('Eric :.', eric, 'ÇDF');
console.log('Claire :.', clair, 'ÇDF');
console.log('Madame MUKUNA :.', madameMukuna, 'ÇDF');
console.log('Joseph :.', joseph, 'ÇDF');
console.log('Sarah :.', sarah, 'ÇDF');

module.exports = {
    paul,
    marie,
    alain,
    eric,
    clair,
    madameMukuna,
    joseph,
    sarah,
};
