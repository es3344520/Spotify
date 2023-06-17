module.exports = (req, res) => {
  const data = process.env.DATA_1 || "3a1df7cd927e4982b0e24e6c265cf3f1";
  res.status(200).send(data);
};
