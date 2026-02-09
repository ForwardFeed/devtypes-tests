import type {IsLiteral} from "@devtypes/guard"

// Examples automatically extracted from the documentation.
type A = IsLiteral< 'hello' >;  // true
type B = IsLiteral< 42 >;       // true
type C = IsLiteral< true >;     // true
type D = IsLiteral< string >;   // false

// Test automatically generated from examples.
const A: A = true
const B: B = true
const C: C = true
const D: D = false

// Manually written content.
