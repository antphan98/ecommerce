const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://antphan98:Myungsoo1!@cluster0.q9qub.mongodb.net/AllAboutSkin";
const client = new MongoClient(url);
var _db;

export const connectToServer = async () => {
  await client.connect();
  _db = client.db("AllAboutSkin");
};

export const getDb = () => {
  return _db;
};
