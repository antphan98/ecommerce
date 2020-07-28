import { skincare } from "../../../data/skincare";

export default ({ query: { id } }, res) => {
  const filtered = skincare.filter(
    (p) => p.name.toLowerCase() === id.toLowerCase()
  );

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `Product with name: ${id} not found.` });
  }
};
