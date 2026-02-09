import type {IsUnknown} from "@devtypes/guard"

// Examples automatically extracted from the documentation.
type A = IsUnknown< unknown >;  // true
type B = IsUnknown< any >;      // false
type C = IsUnknown< string >;   // false

// Test automatically generated from examples.
const A: A = true
const B: B = false
const C: C = false

// Manually written content.
