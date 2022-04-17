const { assertEqual, eqNonObj, eqObjects } = require('../assertEqual');
const { assertArraysEqual } = require('../eq-standalones/assertArraysEqual');
const { eqArrays } = require('../eq-standalones/eqArrays');
const { head }   = require('../head');
const { tail }   = require('../tail');
const { middle } = require('../middle');
const { flatten } = require('../flatten');
const { countOnly } = require('../countOnly');
const { map } = require('../map');
const { findKey } = require('../findKey');
const { findKeyByValue } = require('../findKeyByValue');

module.exports = { assertEqual, eqNonObj, eqObjects, assertArraysEqual, eqArrays, head, tail, middle, flatten, countOnly, map, findKey, findKeyByValue };