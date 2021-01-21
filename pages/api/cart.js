import { connectToServer, getDb } from "../../db/db";
import { signIn, signOut, useSession } from "next-auth/client";

//import mongodb connection
//set up so when user logged in adds to cart, pushes to cart api and updates
// set up get and post route

const userItem = {
  cart: ["Hello"],
};

const cart = async (req, res) => {
  const session = useSession();

  await connectToServer();
  const db = getDb();
  const users = await db.collection("UserCarts").findOne();

  const add = await db.collection("UserCarts").insertOne(userItem);
  console.log("asdasd", session.user.email);
  res.json({ users, add });
};

export default cart;
