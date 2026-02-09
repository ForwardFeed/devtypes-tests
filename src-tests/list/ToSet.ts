import type {ToSet} from "@devtypes/list"

// Examples automatically extracted from the documentation.
type A = ToSet< number[] >;         // Set< number >
type B = ToSet< Array< string > >;  // Set< string >

// Test automatically generated from examples.
const A: A = Set< number >
const B: B = Set< string >

// Manually written content.
