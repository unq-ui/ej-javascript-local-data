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

function allCharactersBySpecies2(species) {
  return getAllCharacters()
    .reduce((res, ch) => {
      if (ch.species === species) { res.push(ch.name) }
      return res;
    }, []);
}



const characters = allCharactersBySpecies2('Poopybutthole');

console.log(characters);
