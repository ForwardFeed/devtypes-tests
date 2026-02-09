import type {IsAny} from "@devtypes/guard"

// Examples automatically extracted from the documentation.
type A = IsAny< any >;     // true
type B = IsAny< string >;  // false

// Test automatically generated from examples.
const A: A = true
const B: B = false

// Manually written content.
