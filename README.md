# JavaScript Loose Typing Bug: Unexpected NaN

This repository demonstrates a common JavaScript bug related to the loose typing of the `+` operator when used with `undefined` and `null` values.  The bug arises from the way JavaScript handles these values in arithmetic contexts, potentially leading to unexpected `NaN` results or incorrect calculations.

## Bug Description

When using the `+` operator with `undefined` or `null`, JavaScript exhibits behavior that might be unexpected to programmers coming from more strictly-typed languages.

- `undefined + number` results in `NaN` (Not a Number).
- `null + number` results in a numeric addition (treating `null` as 0).

This inconsistency can be problematic, especially when dealing with values that might be unexpectedly undefined or null. 

## Solution

The solution involves explicit checks for `undefined` and `null` values before performing any arithmetic operations.  We can use strict equality (`===`) to ensure that we avoid type coercion issues.  Using this technique provides a robust and reliable solution.