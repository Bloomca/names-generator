const nouns = require("./dictionaries/nouns");
const adjectives = require("./dictionaries/adjectives");

const nounsNumber = nouns.length;
const adjectivesNumber = adjectives.length;

function generateName(options = {}) {
  const nounNumber = Math.floor(Math.random() * nounsNumber);
  const adjectiveNumber = Math.floor(Math.random() * adjectivesNumber);

  return [nouns[nounNumber], adjectives[adjectiveNumber]].join(
    options.separator || "-"
  );
}

module.exports = generateName;
