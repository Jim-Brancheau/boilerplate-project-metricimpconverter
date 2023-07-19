const chai = require("chai");
const assert = chai.assert;

const server = require("../server");

const chaiHttp = require("chai-http");
chai.use(chaiHttp);

suite("Functional Tests", function () {
  this.timeout(5000);
  suite("Integration tests with chai-http", function () {
    test("GET /convert a valid input 10L", function (done) {
      chai
        .request(server)
        .keepOpen()
        .get("/convert?input=10L")
        .end(function (err, res) {
          assert.equal(res.text, "10 liters converts to 2.64172 gallons");
          done();
        });
    });
    test("GET /convert with invalid input 32g", function (done) {
      chai
        .request(server)
        .keepOpen()
        .get("/convert?input=32g")
        .end(function (err, res) {
          assert.equal(res.text, "Error: invalid unit");
        });
    });
    test("GET /convert invalid number 3/7.2/4kg", function (done) {
      chai
        .request(server)
        .keepOpen()
        .get("/convert?input=3/7.2/4kg")
        .end(function (err, res) {
          assert.equal(res.text, "Error: invalid number");
        });
    });
    test("GET /convert invalid number AND unit 3/7.2/4kilomegagram", function (done) {
      chai
        .request(server)
        .keepOpen()
        .get("/convert?input=3/7.2/4kilomegagram")
        .end(function (err, res) {
          assert.equal(res.text, "Error: invalid number and unit");
        });
    });
    test("GET /convert no number kg", function (done) {
      chai
        .request(server)
        .keepOpen()
        .get("/convert?input=kg")
        .end(function (err, res) {
          assert.equal(res.text, "1 kilograms converts to 2.20462 pounds");
        });
    });
  });
});

// const Browser = require("zombie");
// Browser.site = "https://boilerplate-mochachai--jamesbrancheau.repl.co";

// suite("Functional Tests with Zombie.js", function () {
//   this.timeout(10000);
//   const browser = new Browser();

//   suiteSetup(function (done) {
//     return browser.visit("/", done);
//   });

//   suite("Headless browser", function () {
//     test('should have a working "site" property', function () {
//       assert.isNotNull(browser.site);
//     });
//   });

//   suite('"Famous Italian Explorers" form', function () {
//     // #5
//     test('Submit the surname "Colombo" in the HTML form', function (done) {
//       browser.fill("surname", "Colombo").then(() => {
//         browser.pressButton("submit", () => {
//           browser.assert.success();
//           browser.assert.text("span#name", "Cristoforo");
//           browser.assert.text("span#surname", "Colombo");
//           browser.assert.elements("span#dates", 1);
//           done();
//         });
//       });
//     });
//   });
// });
