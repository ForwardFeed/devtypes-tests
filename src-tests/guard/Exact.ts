import type {Exact} from "@devtypes/guard"

// Examples automatically extracted from the documentation.
type A = Exact< { a: number }, { a: number } >;             // { a: number }
type B = Exact< { a: number; b: number }, { a: number } >;  // never

// Test automatically generated from examples.
const A: A = { a: number }
const B: B = never

// Manually written content.
