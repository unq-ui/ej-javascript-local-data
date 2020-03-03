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

function allCharactersBySpecies3(species) {
  return getAllCharacters()
    .reduce((res, ch) => ch.species === species ? [...res, ch.name] : res, [])
}

const characters = allCharactersBySpecies3('Poopybutthole');

console.log(characters);
