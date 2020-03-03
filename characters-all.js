const data = require('./data.json');
const prettyPrint = require('./print');
const Character = require('./Character');

function getAllCharacters() {
  return data.map(character => {
    return new Character(
      character.name,
      character.status,
      character.species,
      character.gender,
      character.image,
      character.location.name
    );
  })
}

const allCharacters = getAllCharacters()

console.log(allCharacters);

function prettyPrint(characters) {
  characters.forEach(ch => console.log(`name: ${ch.name} - species: ${ch.species}`))
}

prettyPrint(allCharacters);
