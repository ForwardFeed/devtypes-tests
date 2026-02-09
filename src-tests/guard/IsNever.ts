import type {IsNever} from "@devtypes/guard"

// Examples automatically extracted from the documentation.
type A = IsNever< never >;   // true
type B = IsNever< string >;  // false

// Test automatically generated from examples.
const A: A = true
const B: B = false

// Manually written content.
