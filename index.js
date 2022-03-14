const codes = require("./data/codes");

module.exports.fullCategory = (code) => {
  const category = codes.find((c) => c[code]);
  return category ? category[code] : "Uncategorized";
};

module.exports.mainCatigory = (code) => {
  const category = codes.find((c) => c[code]);
  return category ? category[code] : "Uncategorized";
};
