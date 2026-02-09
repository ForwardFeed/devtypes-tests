import type {IsUnion} from "@devtypes/guard"

// Examples automatically extracted from the documentation.
type A = IsUnion< string | number >;  // true
type B = IsUnion< string >;           // false

// Test automatically generated from examples.
const A: A = true
const B: B = false

// Manually written content.
