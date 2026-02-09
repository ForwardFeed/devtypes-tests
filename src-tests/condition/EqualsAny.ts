import type {EqualsAny} from "@devtypes/condition"

// Examples automatically extracted from the documentation.
type A = EqualsAny< [ string, number, string ] >;  // false
type B = EqualsAny< [ string, string, number ] >;  // true
type C = EqualsAny< [ 1, 2, 3 ] >;                 // false

// Test automatically generated from examples.
const A: A = false
const B: B = true
const C: C = false

// Manually written content.
