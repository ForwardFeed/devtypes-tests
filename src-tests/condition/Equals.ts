import type {Equals} from "@devtypes/condition"

// Examples automatically extracted from the documentation.
type A = Equals< string, string >;  // true
type B = Equals< string, number >;  // false

// Test automatically generated from examples.
const A: A = true
const B: B = false

// Manually written content.
