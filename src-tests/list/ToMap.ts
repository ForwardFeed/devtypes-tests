import type {ToMap} from "@devtypes/list"

// Examples automatically extracted from the documentation.
type A = ToMap< Record< string, number > >;  // Map< string, number >
type B = ToMap< number[] >;                  // Map< number, number >

// Test automatically generated from examples.
const A: A = Map< string, number >
const B: B = Map< number, number >

// Manually written content.
