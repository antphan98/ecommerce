import connection from "../api/connection";

connection();

export default async (req, res) => {
  res.json({ test: "test" });
};
