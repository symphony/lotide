# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @symphony/lotide`

**Require it:**

`const _ = require('@symphony/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(...)`: Compares if two items are identical or not
* `head(...)`: Returns the first element of an array
* `tail(...)`: Omits the first element of an array and returns the rest
* `middle(...)`: Returns the middle (or middle two) elements of an array
* `flatten(...)`: Flattens an array of any depth to a single level
* `countOnly(...)`: Takes a list and list of items to count and returns a report with the totals
* `map(...)`: Takes an array and applies a callback function to each element, then returns results in a new array
* `findKey(...)`: Checks each value in an object for the provided condition, returns key name when found
* `findKeyByValue(...)`: Searches for given value in an object and returns first key name that matches