import type {IsJSONSerializable} from "@devtypes/guard"

// Examples automatically extracted from the documentation.
type A = IsJSONSerializable< { a: string; b: number[] } >;   // true
type B = IsJSONSerializable< { a: string; b: undefined } >;  // false
type C = IsJSONSerializable< ()=>void >;                     // false
type D = IsJSONSerializable< ( string | undefined )[] >;     // false
type Recurse = { direct: Recurse, union: number | Recurse }
type E = IsJSONSerializable< Recurse >;                      // false

// Test automatically generated from examples.
const A: A = true
const B: B = false
const C: C = false
const D: D = false
const E: E = false

// Manually written content.
