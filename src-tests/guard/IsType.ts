import type {IsType} from "@devtypes/guard"

// Examples automatically extracted from the documentation.
type A = IsType< string, string | number >;  // true
type B = IsType< number, string >;           // false

// Test automatically generated from examples.
const A: A = true
const B: B = false

// Manually written content.
