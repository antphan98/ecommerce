const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://antphan98:Myungsoo1!@cluster0.q9qub.mongodb.net/AllAboutSkin?retryWrites=true&w=majority";
const client = new MongoClient(url);

async function connection() {
  try {
    await client.connect();
    console.log("Connected correctly to server");
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

export default connection;
