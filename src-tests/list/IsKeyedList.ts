import type {IsKeyedList} from "@devtypes/list"

// Examples automatically extracted from the documentation.
type A = IsKeyedList< Record< string, number > >;  // true
type B = IsKeyedList< Map< number, string > >;     // true
type C = IsKeyedList< number[] >;                  // false

// Test automatically generated from examples.
const A: A = true
const B: B = true
const C: C = false

// Manually written content.
