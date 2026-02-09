import type {EqualsAll} from "@devtypes/condition"

// Examples automatically extracted from the documentation.
type A = EqualsAll< [ string, string, string ] >;   // true
type B = EqualsAll< [ boolean, number, number ] >;  // false

// Test automatically generated from examples.
const A: A = true
const B: B = false

// Manually written content.
