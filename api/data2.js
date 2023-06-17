module.exports = (req, res) => {
  const data = process.env.DATA_2 || "fe92108ead614290bb6223ef1764440e";
  res.status(200).send(data);
};
