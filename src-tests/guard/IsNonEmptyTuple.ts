import type {IsNonEmptyTuple} from "@devtypes/guard"

// Examples automatically extracted from the documentation.
type A = IsNonEmptyTuple< [ number ] >;  // true
type B = IsNonEmptyTuple< [] >;          // false

// Test automatically generated from examples.
const A: A = true
const B: B = false

// Manually written content.
