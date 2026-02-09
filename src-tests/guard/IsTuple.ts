import type {IsTuple} from "@devtypes/guard"

// Examples automatically extracted from the documentation.
type A = IsTuple< [ string, number ] >;  // true
type B = IsTuple< number[] >;            // false

// Test automatically generated from examples.
const A: A = true
const B: B = false

// Manually written content.
