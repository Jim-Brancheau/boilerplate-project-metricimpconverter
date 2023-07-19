function ConvertHandler() {
  const validInputUnits = ["gal", "l", "lbs", "kg", "mi", "km"];
  const matcher = /^([^a-zA-Z]*)([a-zA-Z]+)$/;

  this.getNum = function (input) {
    let result;
    let matches = input.match(matcher);
    if (matches) {
      var number = matches[1];
      console.log("number: ", number);
      if (number === "") {
        number = "1";
      }
      result = Number(number);
    }

    if (number.includes("/")) {
      var fraction = number.split("/");
      if (fraction.length != 2) {
        result = "Error: invalid number";
      } else {
        number = fraction[0] / fraction[1];
        result = Number(number);
      }
    }
    return result;
  };

  this.getUnit = function (input) {
    let result;
    let matches = input.match(matcher);

    if (matches) {
      var unit = matches[2];
    }

    if (validInputUnits.includes(unit)) {
      result = unit;
    } else {
      result = "Error: invalid unit";
    }

    return result;
  };

  this.getReturnUnit = function (initUnit) {
    let result;
    console.log("initUnit: ", initUnit);
    console.log("initUnit.toLowerCase(): ", initUnit.toLowerCase());
    switch (initUnit.toLowerCase()) {
      case "mi":
        result = "km";
        break;
      case "km":
        result = "mi";
        break;
      case "lbs":
        result = "kg";
        break;
      case "kg":
        result = "lbs";
        break;
      case "gal":
        result = "L";
        break;
      case "l":
        result = "gal";
        break;
      default:
        result = "";
    }
    return result;
  };

  this.spellOutUnit = function (unit) {
    let result;
    switch (unit.toLowerCase()) {
      case "mi":
        result = "miles";
        break;
      case "km":
        result = "kilometers";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "kg":
        result = "kilograms";
        break;
      case "gal":
        result = "gallons";
        break;
      case "l":
        result = "liters";
        break;
      default:
        result = "";
    }
    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;

    return result;
  };
}

module.exports = ConvertHandler;
