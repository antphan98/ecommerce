import { skincare } from "../../../data/skincare";

export default (req, res) => {
  res.status(200).json(skincare);
};
