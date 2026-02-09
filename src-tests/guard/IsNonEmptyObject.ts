import type {IsNonEmptyObject} from "@devtypes/guard"

// Examples automatically extracted from the documentation.
type A = IsNonEmptyObject< { a: number } >;  // true
type B = IsNonEmptyObject< {} >;             // false

// Test automatically generated from examples.
const A: A = true
const B: B = false

// Manually written content.
