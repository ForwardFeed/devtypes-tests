import type {IsObject} from "@devtypes/guard"

// Examples automatically extracted from the documentation.
type A = IsObject< { a: number } >;  // true
type B = IsObject< number[] >;       // false

// Test automatically generated from examples.
const A: A = true
const B: B = false

// Manually written content.
