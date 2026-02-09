import type {IsNonLiteral} from "@devtypes/guard"

// Examples automatically extracted from the documentation.
type A = IsNonLiteral< string >;  // true
type B = IsNonLiteral< 'a' >;     // false

// Test automatically generated from examples.
const A: A = true
const B: B = false

// Manually written content.
