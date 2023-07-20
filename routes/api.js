"use strict";
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.get("/convert", function (req, res) {
    let data = {};
    if (req.query && req.query.input) {
      let initNum = convertHandler.getNum(req.query.input);
      let initUnit = convertHandler.getUnit(req.query.input);
      let returnNum = convertHandler.convert(Number(initNum), initUnit);
      let returnUnit = convertHandler.getReturnUnit(initUnit);

      if (
        initNum.toString().includes("Error:") &&
        initUnit.includes("Error:")
      ) {
        res.type("txt").send(initNum + " " + initUnit);
      } else if (initNum.toString().includes("Error:")) {
        res.type("txt").send(initNum);
      } else if (initUnit.includes("Error:")) {
        res.type("txt").send(initUnit);
      } else {
        data = {
          initNum: initNum,
          initUnit: initUnit,
          returnNum: returnNum,
          returnUnit: returnUnit,
          string: convertHandler.getString(
            initNum,
            initUnit,
            returnNum,
            returnUnit
          ),
        };
        res.json(data);
      }
    }
  });
};
