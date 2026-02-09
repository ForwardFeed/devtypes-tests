import type {IsListLike} from "@devtypes/guard"

// Examples automatically extracted from the documentation.
type A = IsListLike< number[] >;                  // true
type B = IsListLike< Record< string, number > >;  // true
type C = IsListLike< string >;                    // false

// Test automatically generated from examples.
const A: A = true
const B: B = true
const C: C = false

// Manually written content.
