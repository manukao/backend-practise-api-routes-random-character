import Chance from "chance";

const chance = new Chance();

export default function handler(req, res) {
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    twitterName: chance.twitter(),
    geohash: chance.geohash(),
    // ... add more keys as desired ...
  };

  res.status(200).json(character);
}
