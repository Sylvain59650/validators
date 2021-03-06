import { test } from "ava";
var validators = require("../distrib/format-validator.min.js");

test("isEAN13-valids", t => {
  var inputs = ["4719512002889", "3108440002619", "3045320057294", "3249760011148", "3037645006361"];
  for (var input of inputs) {
    let result = validators.isEAN13(input);
    t.deepEqual(result, true, input + " fail");
  }
});

test("isEAN13-invalids", t => {
  var inputs = ["4719512002880", "3108440002610"];
  for (var input of inputs) {
    let result = validators.isEAN13(input);
    t.deepEqual(result, false, input + " fail");
  }
});