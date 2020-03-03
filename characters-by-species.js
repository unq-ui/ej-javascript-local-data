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

function allCharactersBySpecies(species) {
  return getAllCharacters()
    .filter(ch => ch.species === species)
    .map(ch => ch.name)
}

const characters = allCharactersBySpecies('Poopybutthole')

console.log(characters);
